import { createElement } from "../../utils/createElementHTML";

export const cloneButtons = () => {

  // ALERTS
  const contentBtnBuy = document.querySelector('.product__buy');
  const contentBtnsCloned = createElement('div', 'content-buttons-cloned');

  document.querySelector('.product__short-stock') ? contentBtnsCloned.appendChild(document.querySelector('.product__short-stock')) : null;
  
  document.querySelector('.offers-notification') ? contentBtnsCloned.appendChild(document.querySelector('.offers-notification')) : null;
  contentBtnBuy.appendChild(contentBtnsCloned);


  // SHARE BUTTONS
  const contentShareButtons = createElement('div', 'content-favorite-button');
  document.querySelector('.product__prices').appendChild(contentShareButtons);
  
  const contentIconsShare = document.querySelector('.share').parentElement;
  contentShareButtons.appendChild(document.querySelector('.product__favorite'));

  const btnShare = createElement('div', 'btn-share');
  btnShare.textContent = 'Compartilhar';
  contentShareButtons.appendChild(btnShare);

  btnShare.addEventListener('click', e => {
    e.target.nextElementSibling.classList.toggle('show-share')
  })

  contentShareButtons.appendChild(contentIconsShare);
}