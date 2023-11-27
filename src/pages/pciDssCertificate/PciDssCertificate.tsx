import React from "react";

import OptionsBlock from "./optionsBlock/OptionsBlock";
import psciDssImage from "../../assets/images/4_project.png";

import styles from "./pciDssCertificate.module.scss";

export const PciDssCertificate: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pciDssTitle}>
        <div className={styles.bevelBlock}>
          <img className={styles.pciDssImg} src={psciDssImage} alt="" />
        </div>
        <div className={styles.mainTextContent}>
          <h1 className={styles.title}>PCI DSS certificate</h1>
          <p className={styles.text}>
            Since 2012, we have successfully undergone annual PCI DSS
            certification for our beGateway white label processing software at
            the highest Level 1.
          </p>
        </div>
      </div>
      <OptionsBlock />
    </div>
  );
};

export default PciDssCertificate;
