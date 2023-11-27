import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";

import { HeaderLinks } from "./components/headerLinks/HeaderLinks";
import { MenuBtnMobile } from "./components/menuBtnMobile/MenuBtnMobile";

import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { PATH } from "../../utils/constants/routeConstants";

import styles from "./header.module.scss";
import { CustomButton } from "../customButton/CustomButton";
import { ButtonVariant } from "../../utils/constants/buttonVariantEnum";

export const Header: React.FunctionComponent = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(PATH.contacts());
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.rightHeaderWrapper}>
          <NavLink className={styles.linkLogo} to={PATH.home}>
            <Logo />
          </NavLink>
          <div className={styles.linksWrapper}>
            <div className={styles.separatorBlock} />
            <HeaderLinks />
          </div>
        </div>
        <div className={styles.contactsWithLang}>
          <CustomButton
            className={styles.btn}
            onClick={onClick}
            variant={ButtonVariant.OutLine}
          >
            Contact sales
          </CustomButton>
        </div>
        <MenuBtnMobile />
      </div>
    </div>
  );
};

export default Header;
