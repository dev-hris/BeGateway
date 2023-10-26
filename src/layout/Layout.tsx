import React, {ReactElement} from 'react';

import Header from '../components/header/Header';

import styles from './layout.module.scss';

type LayoutProps = {
  children: ReactElement;
};

export const Layout: React.FunctionComponent<LayoutProps> = ({children}) => {
  return (
    <div className={styles.layout}>
      <Header/>
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
