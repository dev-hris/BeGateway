import { FC, memo } from "react";

import { HeaderNavigationFooter } from "./components/headerNavigationFooter/HeaderNavigationFooter";

import { headersNavigation } from "../../../../utils/constants/headerConstants";

import {ReactComponent as Facebook} from "../../../../assets/icons/socials/Facebook.svg"
import {ReactComponent as Linkedin} from "../../../../assets/icons/socials/Linkedin.svg"
import {ReactComponent as Youtube} from "../../../../assets/icons/socials/Youtube.svg"
import eCom from "../../../../assets/images/eCom.png"

import styles from "./menuFooter.module.scss";

export const MenuFooter: FC = memo(() => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.navigationWrapper}>
          {headersNavigation.map((header) => (
            <HeaderNavigationFooter key={header.id} values={header} />
          ))}
          <div className={styles.socials}>
            <Facebook />
            <Linkedin />
            <Youtube />
          </div>
          <div className={styles.eCom}>
            <img className={styles.img} src={eCom} alt="eCom" />
            <p className={styles.infoECom}>@ 2023 eComCharge UAB</p>
          </div>
        </div>
      </div>
    </div>
  );
});
