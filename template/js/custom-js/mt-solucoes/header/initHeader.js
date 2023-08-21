import { createElement } from "../utils/createElementHTML";
import { isMobile } from "../utils/isMobile"
import { buttonMainMenu } from "./buttonMenuMiniMenu";
import { changeHeader } from "./changeHeader"
import { initSubMenu } from "./mainSubMenu";

const initListenerOnMenuButtonMobile = () => {
  const button = document.querySelector('.header__toggler');
  button.removeAttribute('onclick');
  const contentMenu = document.querySelector('.main-menu');
  
  button.addEventListener('click', () => {
    contentMenu.classList.add('show-menu-mobile');
  })
  
  const btnClose = createElement('div', 'btn-clone-menu-mobile');
  btnClose.innerText = 'X'
  contentMenu.prepend(btnClose);
  btnClose.addEventListener('click', ()=> {
    contentMenu.classList.remove('show-menu-mobile');
  } )
}

const initHeaderDesktop = () => {
  changeHeader();
  initSubMenu('.main-submenu', 'show-submenu-main');
  buttonMainMenu();
}

const initHeaderMobile = () => {
  initSubMenu('.header__submenu > div .main-submenu', 'show-submenu-main' );
  initSubMenu('.header__submenu', 'show-submenu-main-mobile');
  initListenerOnMenuButtonMobile();
}


export const initHeader = () => {
  // DESKTOP
  // Change header on scroll
  !isMobile ? initHeaderDesktop() : initHeaderMobile();
  
}