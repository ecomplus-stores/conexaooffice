import { addClassOnClasses } from "./home/addClassOnSections/";
import { initCategoryPage } from "./categoryPage";
import { initHeader } from "./header/initHeader";
import { initProductPage } from "./productPage";
import { initCartPage } from "./cartPage";
import { initFooter } from "./footer";
import { initMobile } from "./mobile";



// INIT HEADER
document.querySelector('.header') ? initHeader() : null;

// CATEGORY PAGE
document.querySelector('#page-categories') ? initCategoryPage() : null;

//PRODUCT PAGE
document.querySelector('#page-products') ? initProductPage() : null; 

// HOME
document.querySelector('.page--home') ? addClassOnClasses() : null;

// FOOTER
document.querySelector('footer.foo') ? initFooter() : null;


window.addEventListener("load", (event) => {
  window.matchMedia("(max-width: 768px)").matches ? initMobile() : null;
  
});


// LOGIN ACCOUNT PAGE


