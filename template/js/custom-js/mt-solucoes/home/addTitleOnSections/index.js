
const createElement = (element, className, text) => {
  const elTitleSection = document.createElement(element)
  elTitleSection.classList.add(className);
  elTitleSection.textContent = text;
  return elTitleSection;
}


export const inserTitleOnSection = (element, text) => {
  const titlePage = createElement('h1', 'title-page', text);
  element.prepend(titlePage)
}