import React from "react";

import HeaderBlock from "../../components/headerBlock/HeaderBlock";
import NewClientsBlock from "./newClientsBlock/NewClientsBlock";
import CurrentClientsBlock from "./currentClientsBlock/CurrentClientsBlock";
import OfficeBlock from "./officeBlock/OfficeBlock";

import contactsImg from "../../assets/images/2_project.png";

import styles from "./contacts.module.scss";

export const Contacts: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <HeaderBlock src={contactsImg} />
      <NewClientsBlock />
      <CurrentClientsBlock />
      <OfficeBlock />
    </div>
  );
};

export default Contacts;
