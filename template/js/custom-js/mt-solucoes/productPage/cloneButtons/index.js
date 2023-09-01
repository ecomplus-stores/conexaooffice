function cloneContentShare () {
  document.querySelector('.content-compartilhar').appendChild(document.querySelector('.share').parentElement);
}

function cloneContentFavoriteButton () {
  document.querySelector('.product__buy').appendChild(document.querySelector('.product__buy + div a'))
}

function cloneContentNotification () {
  document.querySelector('.product__prices .prices__value').appendChild(document.querySelector('.offers-notification'))
}

export const cloneButtons = () => {
  cloneContentShare ();
  cloneContentFavoriteButton();
  cloneContentNotification();
}