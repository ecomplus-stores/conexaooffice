import { initCheckout } from "./checkout-mt/initCheckout"
import { initCartPage } from "./mt-solucoes/cartPage"

// CHECKOUT
window.addEventListener('load', () => {
  // seu init original
  dataLayer.forEach(element => element.event === 'checkout' ? initCheckout() : null)

  // garante que o botão já existe
  const interval = setInterval(() => {
    const checkoutBtn = document.querySelector('.cart__btn-checkout')
    if (!checkoutBtn) return

    clearInterval(interval)

    // esconde o botão até marcar
    checkoutBtn.style.display = 'none'

    checkoutBtn.insertAdjacentHTML('beforebegin', `
      <div id="block-confirm" class="form-group">
        <div class="custom-control custom-checkbox">
          <input type="checkbox" id="input-confirm-checkout" class="custom-control-input">
          <label for="input-confirm-checkout" class="custom-control-label">
            Ao finalizar a compra, confirmo que estou ciente e concordo que os pedidos realizados e aprovados 
            entre 20/12 e 04/01 serão processados a partir do dia 05/01/2026, 
            e o prazo de entrega passará a contar a partir dessa data.
          </label>
        </div>
      </div>
    `)

    const confirmInput = document.querySelector('#input-confirm-checkout')

    confirmInput.addEventListener('change', () => {
      if (confirmInput.checked) {
        document.querySelector('#block-confirm').remove()
        checkoutBtn.style.display = 'block'
      }
    })
  }, 300)
})

// CART PAGE
window.location.hash.split('/')[1] === 'cart' ? initCartPage() : null
