import { changePositionContentFilter } from "./ChangePositionFilter";
import { insertTitlePage } from "./insertTitlePage"

export const initCategoryPage = () => {
  insertTitlePage();
  changePositionContentFilter();
}