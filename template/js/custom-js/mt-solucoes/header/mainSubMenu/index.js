import { createElement } from "../../utils/createElementHTML";

const startSubMenu = (element, classToShowSubMenu) => {
  element.parentElement.prepend(createElement('div', 'btn-submenu-menu'));
  element.parentElement.firstElementChild.addEventListener('click', e=> {
    e.target.parentElement.lastElementChild.classList.toggle(`${classToShowSubMenu}`)
    e.target.classList.toggle('btn-close-submenu-menu')
  })
}

export const initSubMenu = (classElementMenu, classToShowSubMenu) => {
  document.querySelectorAll(`${classElementMenu}`).forEach(element => {
    startSubMenu(element, classToShowSubMenu);
  })
}

