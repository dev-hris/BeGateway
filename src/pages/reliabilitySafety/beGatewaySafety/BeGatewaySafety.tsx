import React from "react";
import styles from "./beGatewaySafety.module.scss";
import rowImage from "../../../assets/icons/row.svg";
import pciDss from "../../../assets/icons/PCI DSS.svg";
import psd2 from "../../../assets/icons/PSD2.svg";
import visaSecure from "../../../assets/icons/VISA Secure.svg";
import masterpass from "../../../assets/icons/Masterpass.svg";
import mastrcardIDCheck from "../../../assets/icons/Mastrcard ID Check.svg";
import maxmind from "../../../assets/icons/Maxmind.svg";

const safetyFeaturesTop = [
  {
    title: "PSD2 Directive Compliance",
    description:
      "PSD2 is a European regulation for electronic payment services. It regulates access to your payment data by other parties than your bank.",
  },
  {
    title: "3d secure 1.0, 3d secure 2.0, MirAccept 2.0 protocols support",
    description:
      "3D Secure 2.0 offers more convenient authentication methods, including one-time passwords and biometrics, enhancing the user experience. bank.",
  },
  {
    title: "MaxMind minFraud",
    description:
      "Integration with MaxMind minFraud® - Transaction Risk API - Risk data for online fraud detection.",
  },
  {
    title: "Built-in Fraud protection and Risk management system",
    description:
      "beGateway anti-fraud tools - built-in fraud protection and risk management:",
    subItems: [
      "Control over 30 transaction parameters and their combinations in real-time",
      "Automatic choice of action, depending on the specified security rules: pass/reject/pass with a notification to the risk manager",
      "Setting and controlling limits on transaction amounts and numbers at a given time interval",
      "White and black lists",
    ],
  },
];
const safetyFeaturesBottom = [
  {
    title: "Visa Token Service support",
    description:
      "VTS can help PSPs reduce security and compliance costs, as some of the responsibility for storing and processing confidential data shifts to Visa.",
  },
  {
    title: "Mastercard Masterpass support",
    description:
      "MasterPass is a digital wallet service by MasterCard. It allows merchants customers to securely store and share their e-payment data (card number, address, reward program, etc.) with the websites and mobile apps they work with.",
  },
  {
    title: "PCI DSS Level 1 certificate",
    description:
      "You can use our PCI DSS Level 1 certificate in terms of our standard service, or we can give you it for your company name for additional fee. Having PCI DSS Level 1 certification makes you appear more trustworthy to the consumer and saves you costly non-compliance penalties. In addition, if your business is PCI compliant, they can help you negotiate with banks because they know you’re serious about the security of personal data and credit information.",
  },
];

const images = [
  {
    id: 1,
    image: pciDss,
  },
  {
    id: 2,
    image: psd2,
  },
  {
    id: 3,
    image: visaSecure,
  },
  {
    id: 4,
    image: masterpass,
  },
  {
    id: 5,
    image: mastrcardIDCheck,
  },
  {
    id: 6,
    image: maxmind,
  },
];
const BeGatewaySafety: React.FunctionComponent = () => {
  return (
    <div className={styles.beGatewaySafety}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          beGateway <span>safety</span>
        </h2>
        <div className={styles.blockPartners}>
          {images.map((item) => {
            return <img src={item.image} key={item.id} alt={item.image} />;
          })}
        </div>
        <div className={styles.listsBlock}>
          <ul className={styles.list}>
            {safetyFeaturesTop.map((feature, index) => (
              <li key={index} className={styles.listItem}>
                <span>{feature.title}</span>
                {feature.description}
                {feature.subItems && (
                  <ul className={styles.listSubItem}>
                    {feature.subItems.map((subItem, subIndex) => (
                      <li key={subIndex} className={styles.subItem}>
                        {subItem}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <ul className={styles.list}>
            {safetyFeaturesBottom.map((feature, index) => (
              <li key={index} className={styles.listItem}>
                <span>{feature.title}</span>
                {feature.description}
              </li>
            ))}
            <li>
              {" "}
              <a href="#" className={styles.linkBlock}>
                <img src={rowImage} alt="row" />
                Check PCI DSS certificate
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BeGatewaySafety;
