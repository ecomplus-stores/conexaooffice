import { addClassOnClasses } from "./home/addClassOnSections/";
import { initCategoryPage } from "./categoryPage";
import { initHeader } from "./header/initHeader";
import { initProductPage } from "./productPage";
import { initCartPage } from "./cartPage";
import { initFooter } from "./footer";
import { initMobile } from "./mobile";
import { createElement } from "./utils/createElementHTML";
import { checkItemsList } from "./orcamento/budgetList";
import { isElementLoaded } from "./utils/isElementLoaded";



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

  const buttonBudgetMiniCart = createElement('a', 'button-budget-minicart');
  buttonBudgetMiniCart.textContent = 'Orçar todos os produtos do carrinho';
  buttonBudgetMiniCart.setAttribute('href', `${window.origin}/orcamento`);
  
  isElementLoaded('.minicart__aside .card-footer').then(()=>{
    document.querySelector('.minicart__aside .card-footer').appendChild(buttonBudgetMiniCart)
  });
});
// ORCAMENTO
// MailBiz
function initMailBiz () {
  (function(m, a, i, l, b, z, j, s) {
    if (m[z]) return;
    m[z] = {
      id: b,
      ready: 0
    };
    z = a.createElement(i);
    j = a.getElementsByTagName(i)[0];
    z.async = 1;
    z.src = l;
    j.parentNode.insertBefore(z, j);
  })(window, document, 'script', 'https://d3eq1zq78ux3cv.cloudfront.net/static/scripts/integration.min.js', '650b0c927058d778ef84000c', 'MailbizIntegration');
  console.log('Init MailBiz')
}
window.location.pathname == '/orcamento' ? checkItemsList() : null;
window.location.pathname == '/orcamento' ? initMailBiz () : null;



// LOGIN ACCOUNT PAGE


