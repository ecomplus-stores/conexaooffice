const startMenu = () => {
  const btnsContentMenu = document.querySelectorAll('.content-menu-description li a');
  btnsContentMenu.forEach(element => {
    element.addEventListener('click', (e)=> {
      e.preventDefault();
      document.querySelectorAll('.description-selected').forEach(element => element.classList.remove('description-selected'))
      e.target.classList.add('description-selected');
      const trigger = e.target.href;
      document.querySelectorAll('.description-active').forEach(element => element.classList.remove('description-active'))
      document.querySelector(`#${trigger.split('#')[1]}`).classList.add('description-active')
    })
  })
}




export const initMenuDescription = () => {
  document.querySelector("#product-specs") ? startMenu() : null;
}