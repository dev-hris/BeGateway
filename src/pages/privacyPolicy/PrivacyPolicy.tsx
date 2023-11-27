import React from "react";

import GeneralProvisions from "./generalProvisions/GeneralProvisions";
import PersonalDataManagement from "./personalDataManagement/PersonalDataManagement";
import AccessPersonalData from "./accessPersonalData/AccessPersonalData";
import PersonalDataForClient from "./personalDataForClient/PersonalDataForClient";
import FinalProvisions from "./finalProvisions/FinalProvisions";
import picture from "../../assets/images/sitemapPicture.png";

import styles from "./privacyPolicy.module.scss";
import HeaderBlock from "../../components/headerBlock/HeaderBlock";

export const PrivacyPolicy: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <HeaderBlock src={picture} />
      <GeneralProvisions />
      <PersonalDataManagement />
      <AccessPersonalData />
      <PersonalDataForClient />
      <FinalProvisions />
    </div>
  );
};

export default PrivacyPolicy;
