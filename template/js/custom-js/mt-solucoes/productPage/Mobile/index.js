import { createElement } from "../../utils/createElementHTML";

export const initProductPageMobile = () => {

  // Move Name
  const productName = document.querySelector('.product__name');
  document.querySelector('#product').before(productName);
  
  // Move favorite button and sku
  const contentButtonFavorite = createElement('div', 'content-favorite-mobile');
  document.querySelector('#product').prepend(contentButtonFavorite);

  setTimeout(() => {
    contentButtonFavorite.appendChild(document.querySelector('.product__sku'))
    contentButtonFavorite.appendChild(document.querySelector('a.product__favorite'))
  }, 2100);

  // Move content share button
  setTimeout(() => {
    document.querySelector('#product-actions').prepend(document.querySelector('.content-favorite-button'))
  }, 2100);
  
  // Move alerts
  setTimeout(() => {
    document.querySelector('.product__rating').before(document.querySelector('.content-buttons-cloned'))
  }, 2100);

}