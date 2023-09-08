import { addClassOnClasses } from "./home/addClassOnSections/";
import { initCategoryPage } from "./categoryPage";
import { initHeader } from "./header/initHeader";
import { initProductPage } from "./productPage";
import { initCartPage } from "./cartPage";
import { initFooter } from "./footer";
import { initMobile } from "./mobile";
import { createElement } from "./utils/createElementHTML";



// INIT HEADER
document.querySelector('.header') ? initHeader() : null;

// CATEGORY PAGE
document.querySelector('#page-categories') ? initCategoryPage() : null;



// HOME
document.querySelector('.page--home') ? addClassOnClasses() : null;

// FOOTER
document.querySelector('footer.foo') ? initFooter() : null;


window.addEventListener("load", (event) => {

  //PRODUCT PAGE
  document.querySelector('#page-products') ? initProductPage() : null; 
  window.matchMedia("(max-width: 768px)").matches ? initMobile() : null;

  const buttonBudgetMiniCart = createElement('div', 'button-budget-minicart')
  buttonBudgetMiniCart.textContent = 'Orçar todos os produtos do carrinho'
  document.querySelector('.minicart__aside .card-footer').appendChild(buttonBudgetMiniCart)
});




// LOGIN ACCOUNT PAGE


