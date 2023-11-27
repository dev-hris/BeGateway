import React from "react";
import styles from "./questionsBlock.module.scss";

import { ReactComponent as Sales } from "../../../assets/icons/sales.svg";
import { ReactComponent as TechSupport } from "../../../assets/icons/tech_support.svg";
import { ReactComponent as Tag } from "../../../assets/icons/tag.svg";
import ContactCard from "../../../components/contactCard/ContactCard";

const cardItems = [
  {
    id: 1,
    icon: <Sales />,
    title: "Sales",
    text: "Get ready? Contact our sales team.",
    buttonText: "Contact sales",
  },
  {
    id: 2,
    icon: <TechSupport />,
    title: "Technical Support 24x7",
    text: "For our current clients. Do you need our help?",
    buttonText: "Сreate ticket",
  },
  {
    id: 3,
    icon: <Tag />,
    title: "Development",
    text: "For our current clients. Do you want to order a new integration connector, feature or anything else?",
    buttonText: "Submit a request",
  },
];

export const QuestionsBlock: React.FunctionComponent = () => {
  return (
    <div className={styles.questionsBlock}>
        <h3 className={styles.title}>Do you have any questions?</h3>
      <div className={styles.cardsContainer}>
        {cardItems.map((item) => (
          <ContactCard
            key={item.id}
            icon={item.icon}
            title={item.title}
            text={item.text}
            buttonText={item.buttonText}
            onClick={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionsBlock;
