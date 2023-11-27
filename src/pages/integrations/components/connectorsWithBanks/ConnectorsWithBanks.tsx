import React from "react";

import { CustomButton } from "../../../../components/customButton/CustomButton";
import { ButtonVariant } from "../../../../utils/constants/buttonVariantEnum";

import connectors from "../../../../assets/images/connectorsWithBanks.png";

import styles from "./connectorsWithBanks.module.scss";

const paragraphs = [
  {
    id: 1,
    text:
      "We offer INSTANT activation of any READY-MADE integrations " +
      "for our PSP client. With just a single click, our manager can enable " +
      "the system that you rent from us. There's no need to wait for a whole day or a week.",
  },
  {
    id: 2,
    text:
      "At beGateway, we can complete a NEW integration for our clients within " +
      "2-3 weeks during regular office hours, starting from the agreed-upon date. " +
      "We also offer out-of-turn integrations within the same time frame, handled by " +
      "one of our specialists outside of office hours.",
  },
  {
    id: 3,
    text:
      "If you require more extensive integration services, we provide a dedicated " +
      "team for the development of new connectors.",
  },
];

export const ConnectorsWithBanks = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Launch faster with <span className={styles.title__orange}>170+</span>{" "}
        Connectors with Banks & PSPs worldwide
      </h1>

      <div className={styles.contentWrapper}>
        <div className={styles.connectorsImgWrapper}>
          <img alt="" src={connectors} className={styles.connectorsImg} />
          <div className={styles.shadow} />
        </div>
        <div className={styles.textsWrapper}>
          <div className={styles.paragraphs}>
            {paragraphs.map((paragraph) => (
              <div key={paragraph.id} className={styles.paragraph}>
                <h1 className={styles.step}>{paragraph.id}</h1>
                <div className={styles.text}>{paragraph.text}</div>
              </div>
            ))}
          </div>

          <CustomButton
            className={styles.btn}
            variant={ButtonVariant.Redirect}
            onClick={() => ({})}
          >
            Request a list of existing connectors
          </CustomButton>
        </div>
      </div>
    </div>
  );
};
