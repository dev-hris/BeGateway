import { FC } from "react";

import { WelcomeBlockFooter } from "./components/welcomeBlockFooter/WelcomeBlockFooter";
import { MenuFooter } from "./components/menuFooter/MenuFooter";

import styles from "./footer.module.scss";

export const Footer: FC = () => {
  return (<div className={styles.container}>
    <WelcomeBlockFooter />
    <MenuFooter />
  </div>);
}
