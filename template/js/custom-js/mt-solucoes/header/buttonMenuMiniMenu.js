const button = document.querySelector('.content-btn-menu .header__toggler');
const mainMenu = document.querySelector('.header .main-menu');

// Reset state of button on mini header
export const resetStateButtonMiniMenu = () => {
  document.querySelector('.content-btn-menu .header__toggler i').classList.remove('i-times');
  document.querySelector('.content-btn-menu .header__toggler i').classList.add('i-bars');
  mainMenu.classList.remove('show-main-mini-menu');
}

// Toggle class to change icon on click and add class to show main menu on mini menu
export const buttonMainMenu = () => {
  button.addEventListener('click', (e)=> {
    mainMenu.classList.add('show-main-mini-menu')
  });

}