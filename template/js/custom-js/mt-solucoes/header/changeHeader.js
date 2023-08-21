import { resetStateButtonMiniMenu } from "./buttonMenuMiniMenu";

const header = document.querySelector('header');
const mainMenu = document.querySelector('.main-menu');

const setMainMenu = () => {
  header.classList.add('mini-header');
  header.classList.remove('mini-header');
  mainMenu.removeAttribute('id','show-main-menu');
  resetStateButtonMiniMenu();

}

const setMiniMenu = () => {
  header.classList.add('mini-header');
  document.querySelector('#favorite-button').addEventListener('click', e => {
    e.preventDefault();
    mainMenu.setAttribute('id','show-main-menu')
  })
}

export const changeHeader = () => {
  window.document.addEventListener('scroll', ()=> {
    setTimeout(() => {
      window.scrollY > 0 ?  setMiniMenu() : setMainMenu(); 
    }, 100);
  })
}