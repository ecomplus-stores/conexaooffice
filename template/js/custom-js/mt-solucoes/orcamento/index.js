export const setFnBudgetButtons = () => {
  const infoProduct = JSON.parse(
    this.event.target.parentElement.parentElement.parentElement.getAttribute(
      "data-product"
    )
  );
  const { name, pictures, sku } = infoProduct;

  const objItem = {
    name: name,
    img: pictures[0].normal.url,
    sku: sku,
  };
  let currentValueArr = JSON.parse(localStorage.getItem("orcamento"));

  currentValueArr.push(objItem);
  localStorage.setItem("orcamento", JSON.stringify(currentValueArr));
};


export const removeItemOnBudget = (name) => {
  const listStorage = JSON.parse(localStorage.getItem("orcamento"));
  listStorage.forEach((element, i) => {
    if (element.name == name) {
      listStorage.splice(i, 1);
      localStorage.removeItem("orcamento");
      localStorage.setItem("orcamento", JSON.stringify(listStorage));
    }
  });
};



function createButtonBudget (element) {
  const buttonBudget = document.createElement("div")
  buttonBudget.textContent = 'Orçar produto';
  buttonBudget.classList.add('buttonBudget')
  buttonBudget.addEventListener('click', ()=> {
    setFnBudgetButtons()
  })
  element.after(buttonBudget)
}


document.querySelectorAll('article.product-item section .product-card__buy').forEach(element => {
  element.nextElementSibling.classList != "buttonBudget" ? createButtonBudget(element) : null;
})
