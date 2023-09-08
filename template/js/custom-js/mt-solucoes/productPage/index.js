import { cloneButtons } from "./cloneButtons"
import { isMobile } from "../utils/isMobile"
import { initProductPageMobile } from "./Mobile";
import { movePrices } from "./OldPriceMove";
import { initMenuDescription } from "./menuDescription";
import { createElement } from "../utils/createElementHTML";


function initProductPageDesktop () {
  cloneButtons();
  
  setTimeout(() => {
    document.querySelector('.prices--big .prices__compare') ? movePrices() : null;
  }, 2100);
}


export const initProductPage = () => {
  

  initMenuDescription();
  
  isMobile ? initProductPageMobile() : initProductPageDesktop();

  // TEMP
  const buttonBudgetProductPage = createElement('div', 'button-budget');
  buttonBudgetProductPage.textContent = 'Orçar este produto';
  document.querySelector('.product__buy').after(buttonBudgetProductPage);
  buttonBudgetProductPage.addEventListener('click', ()=> {
    document.querySelector('.product__buy button').click();
  })

  // create quantity
  const quantity = createElement('p', 'content-quantity');
  quantity.textContent = `Restam apenas ${storefront.context.body.quantity} unidades no estoque`;
  document.querySelector('.product__sku').after(quantity)

}