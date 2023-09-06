import { createElement } from "../utils/createElementHTML";
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
  })
  // Create close button
  const btnCloseMainMenu = createElement('div', 'btn-close-mini-main-menu');
  btnCloseMainMenu.textContent = 'X';
  btnCloseMainMenu.addEventListener('click', (e)=>{
    e.target.parentElement.classList.remove('show-main-mini-menu');
  })
  document.querySelector('.btn-close-mini-main-menu') ? null : document.querySelector('.main-menu').prepend(btnCloseMainMenu);

  // Custom button TODOS OS PRODUTOS
  const buttonAllProducts = document.querySelector('.mini-header .header__nav :first-child > a');
  buttonAllProducts.removeAttribute('onmouseover');
  buttonAllProducts.removeAttribute('href');
  buttonAllProducts.removeAttribute('onclick');
  buttonAllProducts.addEventListener('click', (e)=> {
    e.preventDefault();
    e.target.classList.toggle('opened-submenu')
    e.target.nextElementSibling.classList.toggle('show-mini-submenu')
  })  
}
export const changeHeader = () => {
  window.document.addEventListener('scroll', ()=> {
    setTimeout(() => {
      window.scrollY > 0 ?  setMiniMenu() : setMainMenu(); 
    }, 100);
  })
}