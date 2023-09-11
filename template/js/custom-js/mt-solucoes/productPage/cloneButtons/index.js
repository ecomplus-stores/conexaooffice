function cloneContentShare () {
  document.querySelector('.content-compartilhar').appendChild(document.querySelector('.share').parentElement);
}

function cloneContentFavoriteButton () {
  document.querySelector('.product__buy').appendChild(document.querySelector('.product__favorite'))
}

function cloneContentNotification () {
  document.querySelector('.product__prices .prices__value').appendChild(document.querySelector('.offers-notification'))
}

function clonePricesDiscount () {
  document.querySelector('.product__prices .prices__value').appendChild(document.querySelector('.product__prices .product__discount'))
}

export const cloneButtons = () => {
  cloneContentShare ();
  cloneContentFavoriteButton();
  cloneContentNotification();
  document.querySelector('.product__prices .product__discount') ? clonePricesDiscount () : null;
}