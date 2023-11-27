import React from "react";
import styles from "./finalProvisions.module.scss";
import PrivacyPolicyLists from "../../../components/privacyPolicyLists/PrivacyPolicyLists";

const listItems = [
  {
    id: 1,
    text: "These privacy provisions are subjected to the legislation of the Republic of Lithuania. All disputes regarding this privacy policy shall be resolved through negotiation, and in the event of failure to reach an agreement – in the courts of the Republic of Lithuania.",
  },
  {
    id: 2,
    text: "Term “this website” used in the provisions of this Privacy policy refers to eComCharge.com and beGateway.com.",
  },
];

export const FinalProvisions: React.FunctionComponent = () => {
  return (
    <div className={styles.finalProvisions}>
      <h2 className={styles.title}>Final Provisions</h2>
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

export default FinalProvisions;
