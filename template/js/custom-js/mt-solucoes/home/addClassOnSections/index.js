import { inserTitleOnSection } from "../addTitleOnSections";
import { startBannerTarja } from "../bannerTarja";

export const addClassOnClasses = () => {
  document.querySelector(".section-categories-banners") ? 
  inserTitleOnSection(
    document.querySelector(".section-categories-banners"),
    "ONDE VAI COMEÇAR A SUA CONEXÃO?"
  ) : null;
  startBannerTarja();
};
