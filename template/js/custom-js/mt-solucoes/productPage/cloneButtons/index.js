function cloneContentShare () {
  document.querySelector('.content-compartilhar').appendChild(document.querySelector('.share').parentElement);
}

function cloneContentFavoriteButton () {
  document.querySelector('.product__buy').appendChild(document.querySelector('.product__buy + div a'))
}



export const cloneButtons = () => {
  cloneContentShare ();
  cloneContentFavoriteButton();
}