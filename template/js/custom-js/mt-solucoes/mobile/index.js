import { startHomePage } from "./home";

export const initMobile = () => {
  // HOME
  document.querySelector('#page-home') ? startHomePage() : null;
}


