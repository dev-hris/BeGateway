import React, { ReactElement } from "react";
import styles from "./linksCard.module.scss";
import { ReactComponent as Question } from "../../assets/icons/question.svg";
import { ReactComponent as Phone } from "../../assets/icons/phone.svg";
import { ReactComponent as Email } from "../../assets/icons/email.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/linkedin.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";

export const LinksCard: React.FunctionComponent = (children) => {
  return (
    <div className={styles.card}>
      <Question />
      <p className={styles.cardTitle}>Use other form to contact us</p>
      <ul className={styles.linksContainer}>
        <li className={styles.link}>
          <Phone />
          <a href="tel:+370 632 03 059">+370 632 03 059 (9:00 – 18:00 GMT+2)</a>
        </li>
        <li className={styles.link}>
          <Email />
          <a href="mailto:mail@hsales@ecomcharge.com">sales@ecomcharge.com</a>
        </li>
        <li className={styles.link}>
          <Linkedin />
          <a
            style={{ textDecoration: "underline" }}
            id="trait"
            href="https://www.linkedin.com/company/ecomcharge/"
          >
            LinkedIn
          </a>
        </li>
        <li className={styles.link}>
          <Facebook />
          <a
            style={{ textDecoration: "underline" }}
            href="https://www.facebook.com/eComCharge/"
          >
            Facebook
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LinksCard;
