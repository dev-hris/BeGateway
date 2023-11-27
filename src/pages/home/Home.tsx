import React from "react";

import { SliderHome } from '../../components/sliderHome/SliderHome';
import WelcomeBlock from './welcomeBlock/WelcomeBlock';
import PaymentBuild from './paymentBuild/PaymentBuild';

import styles from './home.module.scss';

export const Home: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <WelcomeBlock/>
      <PaymentBuild/>
      <SliderHome />
    </div>
  );
}

export default Home;
