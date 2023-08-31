import { removeItemOnBudget } from "..";

const content = document.createElement('ul');
content.classList.add('budgetList-content');
document.querySelector('.banner').after(content)


const createElement = ({name, img, sku}) => {

  const budgetItem = document.createElement('li');
  budgetItem.classList.add('budgetlist-item');


  budgetItem.innerHTML = `
    <button class="remove-budgetitem"></button>
    <div class="thumb"><img src="${img}" alt=""></div>
    <div class="info">
      <h2>${name}</h2>
      <span>${sku}</span>
    </div>
  `;


  document.querySelector('.budgetList-content').appendChild(budgetItem)
  budgetItem.childNodes[1].addEventListener('click', (e)=> {
    e.preventDefault();
    // removeItemOnBudget(name);
    const listStorage = JSON.parse(localStorage.getItem("orcamento"));
    listStorage.forEach((element, i) => {
      if (element.name == name) {
        listStorage.splice(i, 1);
        localStorage.removeItem("orcamento");
        localStorage.setItem("orcamento", JSON.stringify(listStorage));
      }
    });
    e.target.parentElement.remove()
  })
} 
const getArrayBudgetOnLocalStorage = () => {
  const listStorage = JSON.parse(localStorage.getItem("orcamento"));

  listStorage.forEach(element => {
    createElement(element)
  });
}



