import { createElement } from "../../utils/createElementHTML";

const emptyAlert = createElement('p', 'alert-empty');
emptyAlert.textContent = "Não existem itens na lista de orçamento.";


const createElementBudget = ({ name, picture, sku, product_id }) => {
  const budgetItem = document.createElement("li");
  budgetItem.classList.add("budgetlist-item");
  console.log( emptyAlert )
  budgetItem.innerHTML = `
    <div class="thumb"><img src="${picture.normal.url}" alt=""></div>
    <div class="info">
      <h2>${name}</h2>
      <span>${sku}</span>
    </div>
    <div class='remove-budgetitem' id-item="${product_id}"></div>
  `;

  document.querySelector(".budgetList-content").appendChild(budgetItem);
};

function createBudgetList() {

  ecomCart.data.items.forEach((element) => {
    createElementBudget(element);
  });

  document.querySelectorAll(".remove-budgetitem").forEach((element) => {
    element.addEventListener("click", (e) => {
      ecomCart.removeItem(e.target.getAttribute("id-item"));
      e.target.parentElement.remove();
      ecomCart.data.items.length == 0
        ? document.querySelector(".budgetList-content").appendChild(emptyAlert)
        : null;
    });
  });
}

export const checkItemsList = () => {
  ecomCart.data.items.length > 0
    ? createBudgetList()
    : document.querySelector(".budgetList-content").appendChild(emptyAlert);
};
