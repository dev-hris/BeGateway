import React from 'react';
import { useNavigate } from "react-router";

import HeaderBlock from '../../components/headerBlock/HeaderBlock';
import { CustomButton } from '../../components/customButton/CustomButton';
import { ButtonVariant } from '../../utils/constants/buttonVariantEnum';
import {PATH} from '../../utils/constants/routeConstants';

import errorPicture from "../../assets/images/404picture.png"

import styles from "./page404.module.scss";

export const Page404: React.FunctionComponent = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(PATH.home);
  };

  return (
    <div className={styles.container}>
      <HeaderBlock>
        <img className={styles.img} alt="" src={errorPicture}/>
      </HeaderBlock>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          Something Went Wrong
        </div>
        <div className={styles.description}>
          Page Not Found
        </div>
        <CustomButton variant={ButtonVariant.Primary} className={styles.btn} onClick={onClick}>
          Back to Home page
        </CustomButton>
      </div>
    </div>
  )
};

export default Page404;
