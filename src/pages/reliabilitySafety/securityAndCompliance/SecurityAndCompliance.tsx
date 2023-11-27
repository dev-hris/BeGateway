import React from "react";
import styles from "./securityAndCompliance.module.scss";
import imageStar from "../../../assets/images/star_image.png";

export const SecurityAndComplianc: React.FunctionComponent = () => {
  return (
    <div className={styles.securityAndComplianc}>
      <div className={styles.content}>
        <h2 className={styles.title}>Security and compliance at the core</h2>
        <p className={styles.text}>
          beGateway is designed with various tools and systems to ensure
          reliability and safety. beGateway white-label payment platform is a
          highly secure and reliable solution, equipped with multiple layers of
          protection to safeguard the Payment Service Provider's business and
          customers.
        </p>
      </div>
      <div className={styles.imageBlock}>
        <div className={styles.imageContainer}></div>
        <img className={styles.starImage} src={imageStar} alt="star" />
      </div>
    </div>
  );
};

export default SecurityAndComplianc;
