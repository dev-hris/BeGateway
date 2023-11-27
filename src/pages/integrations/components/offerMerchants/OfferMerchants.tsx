import React from "react";

import { TechList } from "./componets/techList/TechList";

import { cardsPlugin } from "./config/cartsPlugin";

import logos from "../../../../assets/images/logos.png";

import styles from "./offerMerchants.module.scss";
import { CRMConstant } from "./config/CRMConstant";

export const OfferMerchants = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.textWrapper}>
          <h1 className={styles.title}>
            Offer your merchants an easy integration process with all of the
            ecommerce platforms that they already use
          </h1>
          <p className={styles.description}>
            At beGateway, we integrate with dozens of the most popular ecommerce
            platforms and provide plug-ins to help your merchants quickly
            establish a connection with our payment platform under your brand.
          </p>
        </div>
        <img alt="logos" src={logos} className={styles.logosImg} />
      </div>
      <TechList
        className={styles.shoppingCards}
        list={cardsPlugin}
        title={"Shopping carts plugins"}
      />
      <TechList
        className={styles.integrations}
        list={CRMConstant}
        title={"Integrations with website builders and CRM"}
      />
    </div>
  );
};
