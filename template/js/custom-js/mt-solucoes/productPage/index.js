import { cloneButtons } from "./cloneButtons"
import { isMobile } from "../utils/isMobile"
import { initProductPageMobile } from "./Mobile";
import { movePrices } from "./OldPriceMove";
import { initMenuDescription } from "./menuDescription";

function initProductPageDesktop () {
  cloneButtons();
  
  setTimeout(() => {
    document.querySelector('.prices--big .prices__compare') ? movePrices() : null;
  }, 2100);
}


export const initProductPage = () => {
  

  initMenuDescription();
  
  isMobile ? initProductPageMobile() : initProductPageDesktop();
}