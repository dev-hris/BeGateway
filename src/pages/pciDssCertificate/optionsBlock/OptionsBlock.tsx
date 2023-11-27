import React from "react";
import styles from "./optionsBlock.module.scss";

import HighlightText from "../../../components/highlightText/HighlightText";

import imagePciDss from "../../../assets/images/pciDSSpng.png";

const optionItem = [
  {
    id: 1,
    title: "Option 1",
    subTitle:
      "Use the PCI DSS certificate issued in the name of our company, eComCharge UAB, within the framework of the rental agreement.",
    text: "60% of the white label payment processing software beGateway tenants issue the certificate in the name of eComCharge UAB company.",
    highlightSubTitle: "in the name of our company",
    highlightText: "60%",
  },
  {
    id: 2,
    title: "Option 2",
    subTitle:
      "Use the PCI DSS certificate issued in the name of your company by our certifier for an additional fee, which needs to be paid annually (each time our company undergoes PCI DSS certification and receives a new yearly certificate).",
    text: "40% of the white label payment processing software beGateway tenants issue the certificate in the name of their own company.",
    highlightSubTitle: "in the name of your company",
    highlightText: "40%",
  },
];

export const OptionsBlock: React.FunctionComponent = () => {
  return (
    <div className={styles.optionsBlock}>
      <div className={styles.optionContent}>
        {optionItem.map((item) => {
          return (
            <div className={styles.cardOption}>
              <h3 className={styles.optionTitle}>{item.title}</h3>
              <div className={styles.cardTextOption}>
                <div className={styles.optionSubTitleBlock}>
                  <HighlightText
                    text={item.subTitle}
                    highlight={item.highlightSubTitle}
                    className={styles.optionSubTitle}
                    highlightClass={styles.boldText}
                  />
                </div>
                <div className={styles.optionTextBlock}>
                  <HighlightText
                    text={item.text}
                    highlight={item.highlightText}
                    className={styles.optionText}
                    highlightClass={styles.boldText}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <img className={styles.imagePciDss} src={imagePciDss} alt="pci dss" />
    </div>
  );
};

export default OptionsBlock;
