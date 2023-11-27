import React from "react";
import styles from "./merchantAPIReference.module.scss";

import officePhoto from "../../../assets/images/officePhoto.png";

export const MerchantAPIReference: React.FunctionComponent = () => {
  return (
    <div className={styles.merchantAPIReference}>
      <div className={styles.content}>
        <img
          className={styles.imageOffice}
          src={officePhoto}
          alt="office photo"
        />
        <div className={styles.textContent}>
          <h3 className={styles.title}>Merchant API Reference</h3>
          <p className={styles.text}>
            Find comprehensive documentation for the Merchant API used on the
            beGateway platform, providing with detailed information on how to
            interact with this interface, detailed explanations of API's
            endpoints, request/response formats, authentication methods, and
            data structures.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MerchantAPIReference;
