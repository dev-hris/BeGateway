import React from "react";

import { GlobalLinkWithAdditionalLinks } from "./components/globalLinkWithAdditionalLinks/GlobalLinkWithAdditionalLinks";
import HeaderBlock from "../../components/headerBlock/HeaderBlock";

import { headersNavigation } from "../../utils/constants/headerConstants";

import picture from "../../assets/images/sitemapPicture.png";

import styles from "./sitemap.module.scss";

export const Sitemap: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <HeaderBlock src={picture} />
      <div className={styles.wrapper}>
        <div className={styles.title}>Sitemap</div>
        <div className={styles.linksWrapper}>
          {headersNavigation.map((values) => (
            <GlobalLinkWithAdditionalLinks key={values.id} values={values} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
