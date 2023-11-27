import React from "react";
import styles from "./personalDataManagement.module.scss";
import PrivacyPolicyLists from "../../../components/privacyPolicyLists/PrivacyPolicyLists";

const listItems = [
  {
    id: 1,
    text: "Some of the data contained on this website, which eComCharge receives directly from the Client and/or public information files, can be considered personal data and therefore will be processed by eComCharge in accordance with the law and other legislation of the Republic of Lithuania and these Privacy policy provisions.",
  },
  {
    id: 2,
    text: "The Client may visit this websites without providing any information about him/herself, but if the Client wants to start using services offered by eComCharge on the website, eComCharge asks the Client to provide his/her email address and/or phone number, also name and surname or company name, and other information (depending on the services the Client aims to use).",
  },
  {
    id: 3,
    text: "Usually eComCharge manages the following personal data: name and surname; email address; phone number; company address; IP address; and any other information provided by the Client to eComCharge.",
  },
  {
    id: 4,
    text: "Data, which the Client submits, is processed with the following aims: as contact information, to form relevant offer/proposal to the Client, analytics, etc.",
  },
  {
    id: 5,
    text: "On this website eComCharge may use cookies. Cookies are small files sent to the Client’s web browser and stored on his/her computer’s hard drive. Cookies are sent to the Client’s computer the first time he/she visits the website. Later on, cookies are used to identify the Client’s computer and facilitate his/her access to this website or the information contained therein. The Client agrees for cookies to be used. Most web browsers accept cookies, but the Client can change his/her browser settings so that cookies are not accepted. In this case, some features may not work.",
  },
  {
    id: 6,
    text: "Like many website managers, eComCharge monitors the hits of the website and collects information on how many people have visited the website, what is the server domain name of the visitors’ internet service provider, etc. This information is collected automatically during the visit on the website. It helps the website manager to understand how visitors use the website and allows improving services provided by eComCharge.",
  },
  {
    id: 7,
    text: "All of the aforementioned information comprising Client’s personal data will not be transferred to any third parties without Client’s consent unless applicable legal acts require otherwise or it is necessary to provide services. eComCharge retains the right to hire other people at its discretion, if necessary, to carry out certain functions on behalf of eComCharge. In order to carry out the functions assigned to such people, some of the Client’s information may be made available to them. However, mentioned people cannot use this information for any purposes other than to perform functions that have been assigned to them.",
  },
  {
    id: 8,
    text: "The manager of personal data processed on this website is eComCharge.",
  },
];

export const PersonalDataManagement: React.FunctionComponent = () => {
  return (
    <div className={styles.personalDataManagement}>
      <h2 className={styles.title}>Personal data management</h2>
      <ol className={styles.listContainer}>
        {listItems.map((item) => (
          <PrivacyPolicyLists key={item.id} text={item.text} />
        ))}
      </ol>
    </div>
  );
};

export default PersonalDataManagement;
