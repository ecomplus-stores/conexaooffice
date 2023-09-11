function cloneContentNotification () {
  document.querySelector('.product__sku').appendChild(document.querySelector('.offers-notification'))
}

function cloneShareContent () {
  document.querySelector('#product').before(document.querySelector('.content-compartilhar'))
  document.querySelector('.content-compartilhar').appendChild(document.querySelector('.share').parentElement);
}

function cloneFavoriteContent () {
  document.querySelector('#product-gallery').before(document.querySelector('.product__favorite'))
}

function cloneDiscount () {
  document.querySelector('.product__prices .prices .prices__value').appendChild(document.querySelector('.product__discount'))
  
}


export const initProductPageMobile = () => {
  cloneContentNotification ();
  cloneShareContent ();
  cloneFavoriteContent ();
  document.querySelector('.product__discount') ? cloneDiscount () : null;
}