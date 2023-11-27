import React, { MouseEvent, ReactNode } from "react";
import styles from "./contactCard.module.scss";
import { CustomButton } from "../customButton/CustomButton";
import { ButtonVariant } from "../../utils/constants/buttonVariantEnum";

type ContactCardProps = {
  icon: ReactNode;
  title: string;
  text: string;
  buttonText: string;
  onClick: (e?: MouseEvent<HTMLButtonElement>) => void;
};

const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  title,
  text,
  buttonText,
  onClick,
}) => {
  return (
    <div className={styles.card}>
      {icon}
      <p className={styles.cardTitle}>{title}</p>
      <p className={styles.cardText}>{text}</p>
      <CustomButton
        className={styles.cardBtn}
        onClick={onClick}
        variant={ButtonVariant.Primary}
      >
        <span className={styles.btnText}>{buttonText}</span>
      </CustomButton>
    </div>
  );
};

export default ContactCard;
