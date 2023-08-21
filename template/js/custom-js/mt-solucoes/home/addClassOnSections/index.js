import { inserTitleOnSection } from "../addTitleOnSections";
import { startBannerTarja } from "../bannerTarja";



export const addClassOnClasses = () => {
  
  inserTitleOnSection(document.querySelector('.section-categories-banners'), 'ONDE VAI COMEÇAR A SUA CONEXÃO?')
  startBannerTarja();
}