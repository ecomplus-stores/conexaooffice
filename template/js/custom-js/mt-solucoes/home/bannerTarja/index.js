const insertTextOnItemTarja = (picture) => {
  const text = picture.getAttribute('data-alt');
  const elText = document.createElement('p');
  elText.textContent = text;

  picture.parentElement.appendChild(elText);
}

const getTitlesTarja = () => {
  document.querySelectorAll('.banner-tarja picture').forEach(element => {
    insertTextOnItemTarja(element)
  })
}




export const startBannerTarja = () => {
  getTitlesTarja();
}