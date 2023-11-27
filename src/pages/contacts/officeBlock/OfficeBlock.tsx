import React from "react";
import styles from "./officeBlock.module.scss";
import { ReactComponent as Lithuania } from "../../../assets/icons/lithuania.svg";

export const OfficeBlock: React.FunctionComponent = () => {
  return (
    <div className={styles.officeBlock}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Visit our office</h2>
        <p className={styles.subtitle}>eComCharge UAB</p>
        <p className={styles.text}>
          J. Balčikonio g. 3,
          <br /> LT-08247 Vilnius, Lithuania
          <br /> Monday-Friday 9.00-18.00, GMT+2
        </p>
      </div>
      <Lithuania className={styles.lithuaniaImg} />
    </div>
  );
};

export default OfficeBlock;
