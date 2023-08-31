


const setFnBudgetButtons = (dataElement) => {
  const infoProduct = JSON.parse(dataElement.getAttribute("data-product"));
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

document.querySelectorAll('article.product-item section .product-card__buy').forEach(element => {
  element.addEventListener('click', (e)=> {
    setFnBudgetButtons(e.target.parentElement.parentElement.parentElement.parentElement.parentElement)
  })
})


// REMOVE ITEM ORCAMENTO
const removeItemOnBudget = (name) => {
  const listStorage = JSON.parse(localStorage.getItem("orcamento"));
  listStorage.forEach((element, i) => {
    if (element.name == name) {
      listStorage.splice(i, 1);
      localStorage.setItem("orcamento", JSON.stringify(listStorage));
    }
  });
};
// Add event listener remove buttons
document.querySelectorAll('.cart-item__data button + div').forEach(element => {
  element.className == 'cart-item__name' ?  element.parentElement.addEventListener('click', ()=>{
    removeItemOnBudget(element.getAttribute('title'));
  }) : null;
})
