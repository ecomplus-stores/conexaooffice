const createElement = ({name, picture, sku}) => {

  const budgetItem = document.createElement('li');
  budgetItem.classList.add('budgetlist-item');


  budgetItem.innerHTML = `
    <div class="thumb"><img src="${picture.normal.url}" alt=""></div>
    <div class="info">
      <h2>${name}</h2>
      <span>${sku}</span>
    </div>
  `;


  document.querySelector('.budgetList-content').appendChild(budgetItem)
  
}

function createBudgetList () {
  ecomCart.data.items.forEach(element => {
    createElement(element)
  });
}

export const checkItemsList = () => {
  ecomCart.data.items.length > 0 ? createBudgetList () : document.querySelector('.budgetList-content').textContent  = 'Não existe itens a serem orçados.';
}

