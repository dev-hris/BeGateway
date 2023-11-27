import {FunctionComponent, useState} from "react"

import { headersNavigation } from "../../../../utils/constants/headerConstants";

import styles from "./headerLinks.module.scss"
import { HeaderLink } from "../headerLink/HeaderLink";
import { IHeaderLink } from "../../../../utils/types/headerTypes";

export const HeaderLinks: FunctionComponent = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null)

  const handleClickLink = (
    {additionalMenu, link}: IHeaderLink,
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
    if(link === activeLink) {
      setActiveLink(null)
      e.preventDefault();
      return;
    }
    if(additionalMenu) {
      setActiveLink(link)
      e.preventDefault();
      return;
    }

    setActiveLink(null)
  }

  const handleOutSideClick= () => {
    setActiveLink(null)
  }

  return <div className={styles.container}>
    {headersNavigation.map((values, index) => <HeaderLink
      key={values.id}
      activeLink={activeLink}
      handleClickLink={handleClickLink}
      handleOutSideClick={handleOutSideClick}
      values={values}
      positionHeaderLink={index}
    />)}
  </div>;
}
