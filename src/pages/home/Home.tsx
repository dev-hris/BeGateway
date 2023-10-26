import React from 'react';

import {CustomButton} from '../../components/customButton/CustomButton';
import {ButtonVariant} from '../../utils/constants/buttonVariantEnum';

import WelcomeBlock from './welcomeBlock/WelcomeBlock';
import PaymentBuild from './paymentBuild/PaymentBuild';

import styles from './home.module.scss';

export const Home: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <WelcomeBlock/>
      <PaymentBuild/>
    </div>
  );
}

export default Home;
