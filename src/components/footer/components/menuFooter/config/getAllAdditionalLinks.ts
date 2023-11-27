import { IHeaderLink } from "../../../../../utils/types/headerTypes";

export function getAllAdditionalLinks(values: IHeaderLink) {
  if(!values.additionalMenu && !values.additionalFooterMenu) {
    return null;
  }
  if(!values.additionalMenu) {
    return values.additionalFooterMenu
  }
  if(!values.additionalFooterMenu) {
    return values.additionalMenu
  }
  const links = values.additionalMenu;
  return links.concat(values.additionalFooterMenu)
}
