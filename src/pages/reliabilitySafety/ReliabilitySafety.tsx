import React from "react";
import styles from "./reliabilitySafety.module.scss";
import buttonImage from "../../assets/images/button_block.png";
import reliabilitySafetyImage from "../../assets/images/reliabilitySafety.png";

import SecurityAndComplianc from "./securityAndCompliance/SecurityAndCompliance";
import BeGatewayReliability from "./beGatewayReliability/BeGatewayReliability";
import BeGatewaySafety from "./beGatewaySafety/BeGatewaySafety";

export const ReliabilitySafety: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.privacyPolicyTitle}>
        <div className={styles.bevelBlock}>
          <img
            className={styles.contactImg}
            src={reliabilitySafetyImage}
            alt=""
          />
        </div>
        <h1 className={styles.title}>Reliability & Safety</h1>
      </div>
      <div className={styles.startListContent}>
        <SecurityAndComplianc />
        <BeGatewayReliability />
      </div>
      <div className={styles.startListContent}>
        <div className={styles.imageBlock}>
          <div className={styles.imageContainer}></div>
          <img className={styles.buttonImage} src={buttonImage} alt="star" />
        </div>
        <BeGatewaySafety />
      </div>
    </div>
  );
};

export default ReliabilitySafety;
