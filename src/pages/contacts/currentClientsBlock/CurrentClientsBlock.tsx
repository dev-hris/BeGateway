import React from "react";
import styles from "./currentClientsBlock.module.scss";
import { ReactComponent as TechSupport } from "../../../assets/icons/tech_support.svg";
import { ReactComponent as Calendar } from "../../../assets/icons/calendar.svg";
import ContactCard from "../../../components/contactCard/ContactCard";
import LinksCard from "../../../components/linksCard/LinksCard";

const cardItems = [
  {
    id: 1,
    icon: <TechSupport />,
    title: "Get technical support",
    text: "Do you need technical assistance?",
    buttonText: "Сreate ticket",
  },
  {
    id: 2,
    icon: <Calendar />,
    title: "New Development",
    text: "Do you want to order a new integration connector, feature, or anything else?",
    buttonText: "Submit a request",
  },
];

export const CurrentClientsBlock: React.FunctionComponent = () => {
  return (
    <div className={styles.currentClientsBlock}>
      <h2 className={styles.title}>For current clients</h2>
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
        <LinksCard />
      </div>
    </div>
  );
};

export default CurrentClientsBlock;
