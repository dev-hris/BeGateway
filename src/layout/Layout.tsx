import React, { ReactElement } from "react";

import Header from "../components/header/Header";

import styles from "./layout.module.scss";
import { ShadowBlock } from "../components/shadowBlock/ShadowBlock";
import { useAppSelector } from "../utils/hooks/hooksRedux";
import { GlobalMenuMobile } from "../components/globalMenuMobile/GlobalMenuMobile";
import { Footer } from "../components/footer/Footer";

type LayoutProps = {
  children: ReactElement;
};

export const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  const { isOpen } = useAppSelector(
    ({ shadowBlockReducer }) => shadowBlockReducer
  );
  return (
    <div className={styles.layout}>
      <Header />
      {isOpen && (
        <ShadowBlock>
          <GlobalMenuMobile />
        </ShadowBlock>
      )}
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
