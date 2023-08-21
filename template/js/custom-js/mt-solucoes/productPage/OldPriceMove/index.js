export const movePrices = () => {
  const oldPrice = document.querySelector('.prices--big .prices__compare');
  oldPrice.parentElement.children[1].appendChild(oldPrice)

  const discount = document.querySelector('.product__prices .product__discount');
  discount.parentElement.before(discount)
}