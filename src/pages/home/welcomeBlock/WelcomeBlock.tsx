import React from 'react';

import {CustomButton} from '../../../components/customButton/CustomButton';
import {ButtonVariant} from '../../../utils/constants/buttonVariantEnum';

import styles from './welcomeBlock.module.scss';

export const WelcomeBlock: React.FunctionComponent = () => {
  return (
    <div className={styles.welcomeBlock}>
      <div className={styles.background}>
        <h1 className={styles.title}>White Label Payment Processing Software</h1>
        <h2 className={styles.subtitle}>{`For Payment Service Providers and Bank Acquirers to build 
          payment processing systems under their own brands`}</h2>
        <div className={styles.card}>
          <h1 className={styles.titleCard}>PCI DSS Level 1 certificate</h1>
          <h2 className={styles.subtitleCard}>In your company name. Or you may use our one.</h2>
          <CustomButton className={styles.btn} onClick={() => {}} variant={ButtonVariant.Primary}>
            <span className={styles.btnText}>Check PCI DSS certificate</span>
          </CustomButton>
        </div>
      </div>
    </div>
  );
}

export default WelcomeBlock;
