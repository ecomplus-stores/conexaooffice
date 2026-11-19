const functions = require('firebase-functions')
const path = require('node:path')

// The renderer loads the store data (store, categories, grids, search items)
// once per instance, when the module is first required. If any of those
// requests fails, the instance answers 404 for every page until it is
// recycled. Retry the load, then fall back to the snapshot written by the
// build, and only then give the instance up.
try {
  const storeDataPath = require.resolve('@ecomplus/storefront-renderer/src/lib/get-store-data')
  const getStoreData = require(storeDataPath)
  const maxAttempts = 3
  const wait = ms => new Promise(resolve => setTimeout(resolve, ms))

  require.cache[storeDataPath].exports = async (...args) => {
    let lastError
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        return await getStoreData(...args)
      } catch (err) {
        lastError = err
        console.error(`Store data load failed (attempt ${attempt}/${maxAttempts})`, err.message)
        if (attempt < maxAttempts) {
          await wait(attempt * 1000)
        }
      }
    }
    try {
      const { data } = require(path.join(process.cwd(), '.ecom.json'))
      if (data && data.store) {
        console.error('Store data loaded from the build snapshot')
        return data
      }
    } catch (err) {
      // no snapshot bundled with the function
    }
    // let the platform replace this instance instead of serving 404 forever
    setTimeout(() => process.exit(1), 3000)
    throw lastError
  }
} catch (err) {
  console.error('Could not wrap the store data loader', err)
}

const { ssr: renderSsr } = require('@ecomplus/storefront-renderer/functions/')

// Security: the renderer `/~reverse-proxy/` route forwards visitor headers to any URL,
// which exposes the GCP metadata server (service account token). Keep it disabled.
const ssr = (req, res) => {
  if (/reverse-proxy/i.test(`${req.url}${req.originalUrl || ''}`)) {
    return res.sendStatus(404)
  }
  return renderSsr(req, res)
}

process.env.STOREFRONT_LONG_CACHE = 'true'

exports.ssr = functions.https.onRequest((req, res) => ssr(req, res))
