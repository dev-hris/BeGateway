import React from "react";
import styles from "./generalProvisions.module.scss";
import PrivacyPolicyLists from "../../../components/privacyPolicyLists/PrivacyPolicyLists";

const listItems = [
  {
    id: 1,
    text: "eComCharge UAB (hereinafter “eComCharge”) respects the right to personal privacy and puts in all reasonable efforts to ensure the security and confidentiality of the personal data and other information processed on this website.",
  },
  {
    id: 2,
    text: "By visiting this website and/or using the information and/or services contained therein, the Client accepts and agrees that he/she is acquainted with, understands and agrees to this Privacy policy. This Privacy policy does not apply to other Internet and non-Internet projects and products or services of eComCharge. eComCharge retains the right to change the provisions of this Privacy policy at its discretion; therefore, when visiting this website, the Client has the responsibility to make sure that s/he is familiar with the newest version of the Privacy policy which shall be applicable every time the Client visits the website.",
  },
];

export const GeneralProvisions: React.FunctionComponent = () => {
  return (
    <div className={styles.generalProvisions}>
      <h1 className={styles.globalTitle}>Privacy Policy</h1>
      <h2 className={styles.title}>General provisions</h2>
      <ol className={styles.listContainer}>
        {listItems.map((item) => (
          <PrivacyPolicyLists key={item.id} text={item.text} />
        ))}
      </ol>
    </div>
  );
};

export default GeneralProvisions;
