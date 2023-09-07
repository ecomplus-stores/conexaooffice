import { isElementLoaded } from "../../utils/isElementLoaded";

function changeContentFilter () {
  document.querySelector('.search-engine__aside-open').remove();

  const newButtonFilter = document.querySelector('.search-engine__toggles > button[type="button"]').cloneNode(true)

  const contentButtonFilter = document.querySelector('.search-engine__toggles')
  
  // Insert content filter on search-engine__toggles
  contentButtonFilter.appendChild(document.querySelector('.search-engine__aside'));
  // remove original element
  document.querySelector('.search-engine__toggles > button[type="button"]').remove()
  contentButtonFilter.prepend(newButtonFilter);
  contentButtonFilter.children[0].addEventListener('click', (e)=> {
    document.querySelector('.search-engine__toggles aside').removeAttribute('style')
  })

  
  document.querySelector('.search-engine__toggles header').appendChild(document.querySelector('.close').cloneNode(true));
  // remove original element
  document.querySelector('.search-engine__toggles header .close').remove();
  document.querySelector('.search-engine__toggles header .close').addEventListener('click', (e)=> {
    document.querySelector('.search-engine__toggles aside').setAttribute('style', 'display: none')
  })

  // Add event to shot button hidden content filter
  document.querySelector('.search-engine__nav .dropdown button').addEventListener('click', (e)=> {
    e.target.parentElement.nextElementSibling.setAttribute('style', 'display: none;')
})
}


export const changePositionContentFilter = () => {

  isElementLoaded('section.search-engine').then(() => {
    setTimeout(() => {
      changeContentFilter ();
    }, 3000)
  });



}