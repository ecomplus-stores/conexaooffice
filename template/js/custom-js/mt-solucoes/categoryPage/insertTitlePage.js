import { createElement } from "../utils/createElementHTML";

export const insertTitlePage = () => {
  const title = document.title.split('|')[0];
  const contentBase = document.querySelector('.category-retail');
  const elTitle = createElement('h1', 'title-page');
  const contentElTiltle = createElement('div', 'content-title-page');
  elTitle.textContent = title;
  contentElTiltle.appendChild(elTitle)
  contentBase.before(contentElTiltle)
}