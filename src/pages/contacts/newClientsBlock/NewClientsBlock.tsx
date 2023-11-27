import React from "react";
import styles from "./newClientsBlock.module.scss";
import { ReactComponent as Sales } from "../../../assets/icons/sales.svg";
import { ReactComponent as Calendar } from "../../../assets/icons/calendar.svg";
import ContactCard from "../../../components/contactCard/ContactCard";
import LinksCard from "../../../components/linksCard/LinksCard";

const cardItems = [
  {
    id: 1,
    icon: <Sales />,
    title: "Contact sales directly",
    text: "Ready to discuss beGateway rental terms, price options or want to learn more information?",
    buttonText: "Contact sales",
  },
  {
    id: 2,
    icon: <Calendar />,
    title: "Book a demo",
    text: "Want to see your future payment platform? Schedule a demo of the beGateway with our Sales.",
    buttonText: "Book a demo",
  },
];

export const NewClientsBlock: React.FunctionComponent = () => {
  return (
    <div className={styles.newClientsBlock}>
      <h1 className={styles.globalTitle}>Contacts</h1>
      <h2 className={styles.title}>For new clients</h2>
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

export default NewClientsBlock;
