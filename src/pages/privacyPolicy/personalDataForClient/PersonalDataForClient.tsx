import React from "react";
import styles from "./personalDataForClient.module.scss";

const items = [
  {
    id: 1,
    title: "Processing of personal data for client notification purposes",
    text: "By registering in the System, the subject of personal data agrees for his/her data to be processed by eComCharge for notification purposes, i.e. sending notifications about changes in services provided to the Client, their prices and features, agreements concluded with the Client and similar changes, eComCharge system’s messages and other notifications related to provided services.",
  },
  {
    id: 2,
    title: "Third-party websites",
    text: "eComCharge is not responsible for assurance of Client’s privacy on websites of third parties even when third-party websites are available through links presented on this website. eComCharge recommends reading privacy terms of each website which is not owned by eComCharge.",
  },
  {
    id: 3,
    title: "Logotype usage",
    text: "eComCharge provides the Client, using eComCharge services for business and professional needs, with the opportunity to show in the System descriptions of the services provided and goods sold by him/her free of charge during the Agreement validity period (if it does not conflict with the applicable legislation). eComCharge has the right to delete such description and/or logotype from the System or do not advertise it without a separate warning and without indicating reasons for such deletion or non-advertising.",
  },
  {
    id: 4,
    title: "Ensuring Information Security",
    text: "The aim of eComCharge is to ensure the maximum level of security of all information received from the Client and public data files. In order to protect such information from unauthorized access, use, copying or disclosure, eComCharge uses a variety of administrative, technical and physical security tools.",
  },
];

export const PersonalDataForClient: React.FunctionComponent = () => {
  return (
    <div className={styles.personalDataForClient}>
      <div className={styles.contentClient}>
        {items.map((item) => {
          return (
            <div key={item.id}>
              <p className={styles.title}>{item.title}</p>
              <p className={styles.text}>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PersonalDataForClient;
