import { FunctionComponent } from "react";

import { NavLink } from "react-router-dom";
import cn from "classnames";

import {AdditionalMenu} from "../additionalMenu/AdditionalMenu";

import {ReactComponent as ArrowDown} from "../../../../assets/icons/arrowDown.svg";

import { IHeaderLink } from "../../../../utils/types/headerTypes";

import styles from "./headerLink.module.scss";

interface HeaderLinkProps {
  values: IHeaderLink;
  activeLink: string | null;
  handleOutSideClick?: () => void;
  positionHeaderLink: number;
  handleClickLink: (
    value: IHeaderLink,
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
}

export const HeaderLink: FunctionComponent<HeaderLinkProps> = ({
    values,
    activeLink,
    positionHeaderLink,
    handleOutSideClick,
    handleClickLink
  }) => {
  const { name, link, additionalMenu } = values;
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    handleClickLink(values, e)
  };
  const isActiveLink = activeLink === link;

  return (
    <div className={styles.container}>
      <NavLink
        onClick={handleClick}
        className={({ isActive }) =>
          cn(styles.link, { [styles.active]: (isActive && !activeLink) || isActiveLink })
        }
        to={link || ""}
      >
        <div>
          {name}
        </div>
        {additionalMenu && <div className={cn(
          styles.arrowDownWrapper,
          {[styles.active]: isActiveLink})}>
          <ArrowDown />
        </div>}
      </NavLink>
      {isActiveLink && additionalMenu && <AdditionalMenu
        handleOutSideClick={handleOutSideClick}
        values={additionalMenu}
        positionHeaderLink={positionHeaderLink}
      />}
      <div className={styles.enterLine} />
    </div>
  );
};
