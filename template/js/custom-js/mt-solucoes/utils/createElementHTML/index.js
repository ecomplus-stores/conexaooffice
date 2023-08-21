export const createElement = (elHtml, className) => {
  const elementHTML = document.createElement(elHtml);
  elementHTML.classList.add(className);
  return elementHTML;
}
