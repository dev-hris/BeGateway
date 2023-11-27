import { FC, useMemo } from "react";
import { useLocation, useNavigate } from "react-router";

import { CustomButton } from "../../../customButton/CustomButton";
import { ButtonVariant } from "../../../../utils/constants/buttonVariantEnum";
import { headersNavigation } from "../../../../utils/constants/headerConstants";
import {PATH} from '../../../../utils/constants/routeConstants';

import styles from "./welcomeBlockFooter.module.scss"

const isGetContent = (path: string): boolean => {
  for(const header of headersNavigation) {
    if(header.link === path) {
      return header.isGetContent
    }

    for(const additional of header.additionalFooterMenu ?? []) {
      if(additional.link === path) {
        return header.isGetContent
      }
    }
    for(const additional of header.additionalMenu ?? []) {
      if(additional.link === path) {
        return header.isGetContent
      }
    }
  }
  return true;
}

export const WelcomeBlockFooter: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMountContent = useMemo(() => isGetContent(location.pathname), [location])

  if(!isMountContent) {
    return null
  }

  const onClick = () => {
    navigate(PATH.contacts());
  };

  return (<div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <h1 className={styles.title}>Ready to get started?</h1>
        <p className={styles.description}>
          Register your interest: get in touch with us, either directly or by filling the application form
        </p>
      </div>
      <CustomButton className={styles.btn} onClick={onClick} variant={ButtonVariant.Primary}>
        Contact sales
      </CustomButton>
    </div>
  </div>);
}
