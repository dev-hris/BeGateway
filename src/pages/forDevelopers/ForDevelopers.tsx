import React from "react";
import styles from "./forDevelopers.module.scss";

import QuestionsBlock from "./questionsBlock/QuestionsBlock";
import MinHardwareBlock from "./minHardwareBlock/MinHardwareBlock";
import MerchantAPIReference from "./merchantAPIReference/MerchantAPIReference";
import PspApiReference from "./pspApiReference/PspApiReference";

export const ForDevelopers: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <MerchantAPIReference />
      <PspApiReference />
      <MinHardwareBlock />
      <QuestionsBlock />
    </div>
  );
};

export default ForDevelopers;
