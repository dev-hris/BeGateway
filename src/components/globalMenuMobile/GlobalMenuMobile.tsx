import { FunctionComponent, useEffect, useState } from "react";
import { useAppDispatch } from "../../utils/hooks/hooksRedux";

import { HeaderLink } from "../header/components/headerLink/HeaderLink";

import { ReactComponent as Close } from "../../assets/icons/close.svg";

import { headersNavigation } from "../../utils/constants/headerConstants";
import { PATH } from "../../utils/constants/routeConstants";

import { IHeaderLink } from "../../utils/types/headerTypes";

import { setIsOpen } from "../../store/reducers/shadowBlockSlice";
import styles from "./globalMenuMobile.module.scss";
import { CustomButton } from "../customButton/CustomButton";
import { ButtonVariant } from "../../utils/constants/buttonVariantEnum";

const home: IHeaderLink = {
  id: "home",
  name: "Home",
  isGetContent: true,
  link: PATH.home,
  additionalMenu: null,
  additionalFooterMenu: null,
};

const newArrayObj: IHeaderLink[] = [home, ...headersNavigation];

export const GlobalMenuMobile: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const handleClickMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  const handleClickCloseMenu = () => {
    dispatch(setIsOpen(false));
  };
  const handleClickLink = (
    { additionalMenu, link }: IHeaderLink,
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (link === activeLink) {
      setActiveLink(null);
      e.preventDefault();
      return;
    }
    if (additionalMenu) {
      setActiveLink(link);
      e.preventDefault();
      return;
    }
    dispatch(setIsOpen(false));
    setActiveLink(null);
  };
  return (
    <div className={styles.container}>
      <div onClick={handleClickMenu} className={styles.wrapper}>
        <div className={styles.langAndCloseBtnsWrapper}>
          <Close onClick={handleClickCloseMenu} />
        </div>
        <div className={styles.linkWrapper}>
          {newArrayObj.map((values, index) => (
            <HeaderLink
              key={values.id}
              activeLink={activeLink}
              handleClickLink={handleClickLink}
              values={values}
              positionHeaderLink={index}
            />
          ))}
        </div>
        <div className={styles.bottomBtnWrapper}>
          <CustomButton
            className={styles.btn}
            onClick={() => {}}
            variant={ButtonVariant.OutLine}
          >
            Contact sales
          </CustomButton>
        </div>
      </div>
    </div>
  );
};
