export const initMenuOurStores = ()=> {
  document.querySelectorAll('.content-lojas .title').forEach(element => {
    element.addEventListener('click', (e)=> {
      document.querySelectorAll('.show-address-store').forEach(element => element.classList.remove('show-address-store'))
      element.parentElement.classList.toggle('show-address-store');
    })
  })
}