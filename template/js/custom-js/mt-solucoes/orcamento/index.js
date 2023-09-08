


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


