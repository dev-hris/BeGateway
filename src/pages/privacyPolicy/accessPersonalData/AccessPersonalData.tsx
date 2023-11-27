import React from "react";
import styles from "./accessPersonalData.module.scss";
import PrivacyPolicyLists from "../../../components/privacyPolicyLists/PrivacyPolicyLists";

const listItems = [
  {
    id: 1,
    text: "The subject of personal data has the right to demand to be acquainted with personal data stored by eComCharge, learn how it is processed and request to submit such data to him/her. The data can be provided free of charge once per calendar year, but in other cases provision of data may be charged at the amount which does not exceed the cost of data provision.",
  },
  {
    id: 2,
    text: "The subject of personal data has the right to demand eComCharge to correct all his/her personal data free of charge. The subject of personal data has also the right to refuse to have his/her personal data managed and disclosed to third parties, except when it is necessary to provide services.",
  },
  {
    id: 3,
    text: "Request for access, correction, and refusal may be sent by email at support@ecomcharge.com. In the request, the Client has to indicate his/her name, surname, and associated phone number.",
  },
];

export const AccessPersonalData: React.FunctionComponent = () => {
  return (
    <div className={styles.accessPersonalData}>
      <h2 className={styles.title}>
        Access to personal data, its correction and refusal
      </h2>
      <ol className={styles.listContainer}>
        {listItems.map((item) => (
          <PrivacyPolicyLists
            key={item.id}
            text={item.text}
            className={styles.listItem}
          />
        ))}
      </ol>
    </div>
  );
};

export default AccessPersonalData;
