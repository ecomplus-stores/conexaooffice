import { createElement } from "../../utils/createElementHTML"


function createButton () {
  const buttonBudget = document.createElement('div');
  buttonBudget.classList.add('button-orcar');
  buttonBudget.textContent = 'Orçar';
  buttonBudget.addEventListener('click', (e)=> {
    e.target.previousElementSibling.click();
  })
  document.querySelectorAll('.product-card section .product-card__buy').forEach(element => {
    element.nextElementSibling.nodeName === 'A' ? element.after(buttonBudget) : null;
  })
}

export const addButtonBudget = () => {
  document.querySelector('.product-card section .product-card__buy') ? createButton () : null;
  
  document.querySelectorAll('.glide__arrows') ?
  document.querySelectorAll('.glide__arrows').forEach(element => {
    element.addEventListener('click', ()=> {
      setTimeout(() => {
        createButton ();
      }, 1000);
    })
  }) : null;
}
