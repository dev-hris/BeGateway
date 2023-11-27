import React from "react";
import styles from "./beGatewayReliability.module.scss";

export const BeGatewayReliability: React.FunctionComponent = () => {
  return (
    <div className={styles.beGatewayReliability}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          beGateway <span>reliability</span>
        </h2>
        <div className={styles.listsBlock}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Run and uses network infrastructure from{" "}
              <span>Amazon Web Services</span>
            </li>
            <li className={styles.listItem}>
              Isolated services and message broken between them
            </li>
            <li className={styles.listItem}>
              Synchronous and asynchronous interaction of system components
            </li>
            <li className={styles.listItem}>Database duplication</li>
          </ul>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Protection against DDoS attacks by <span>CLOUDFLARE</span>
            </li>
            <li className={styles.listItem}>
              Simultaneous operation of 2 or more instances of critical system
              components with automatic load balancing
            </li>
            <li className={styles.listItem}>
              Customizable real-time monitoring of all applications and
              subsystems using Grafana, Sentry, Kibana.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BeGatewayReliability;
