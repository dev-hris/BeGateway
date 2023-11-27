import React from "react";

import styles from "./pspApiReference.module.scss";

import { CustomButton } from "../../../components/customButton/CustomButton";
import { ButtonVariant } from "../../../utils/constants/buttonVariantEnum";
import board from "../../../assets/images/board.png";

export const PspApiReference: React.FunctionComponent = () => {
  return (
    <div className={styles.pspApiReference}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h3 className={styles.title}>PSP API Reference</h3>
          <p className={styles.text}>
            Discover extensive documentation for the PSP API built on the
            beGateway platform, offering in-depth insights into interacting with
            this interface.
          </p>
        </div>
        <div className={styles.card}>
          <div>
            <p className={styles.cardTitle}>DWH API</p>
            <p className={styles.cardText}>
              Access, retrieve, and manipulate the data stored in the data
              warehouse using standartized protocols and methods.
            </p>
          </div>
          <CustomButton
            className={styles.cardBtn}
            onClick={() => {}}
            variant={ButtonVariant.Primary}
          >
            <span className={styles.btnText}>DWH API</span>
          </CustomButton>
        </div>
      </div>
      <img src={board} alt="board image" className={styles.boardImage} />
    </div>
  );
};

export default PspApiReference;
