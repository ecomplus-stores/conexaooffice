import { cloneButtons } from "./cloneButtons"
import { isMobile } from "../utils/isMobile"
import { initProductPageMobile } from "./Mobile";
import { initMenuDescription } from "./menuDescription";
import { createElement } from "../utils/createElementHTML";
import { isElementLoaded } from "../utils/isElementLoaded/";


function initProductPageDesktop () {
  cloneButtons();
  
}


export const initProductPage = () => {
  

  initMenuDescription();
  
  isMobile ? initProductPageMobile() : initProductPageDesktop();

  // create quantity
  const quantity = createElement('p', 'content-quantity');
  quantity.textContent = `Restam apenas ${storefront.context.body.quantity} unidades no estoque`;
  document.querySelector('.product__sku').after(quantity);


  document.querySelector('.content-compartilhar a span').addEventListener('click', e =>{
    e.preventDefault();
    e.target.parentElement.nextElementSibling.classList.toggle('show-content-share')
  })

}