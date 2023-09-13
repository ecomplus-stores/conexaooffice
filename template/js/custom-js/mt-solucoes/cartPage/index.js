import { createElement } from "../utils/createElementHTML";
import { isElementLoaded } from "../utils/isElementLoaded";

function addClassOnCotent () {
  document.querySelector('#storefront-app').classList.add('cart-page');
}


export const initCartPage = () => {
  addClassOnCotent ();
  const btn = createElement('a', 'btn-orcar');
  btn.textContent = 'Orçar todos os produtos do carrinho';
  btn.setAttribute('href', `${window.origin}/orcamento`);
  isElementLoaded('.cart__back').then(() => {
    setTimeout(() => {
      document.querySelector('.cart__back').appendChild(btn)
    }, 1000)
    document.querySelector('.cart__list').after(document.querySelector('.cart__back'))
  });
}