import React from 'react';

import styles from "./welcomeBlockIntegrations.module.scss"

export const WelcomeBlockIntegrations = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Integrations</h1>
      <p className={styles.description}>
      This overview provides a comprehensive list of integrations
      with banks and PSPs, along with information about the various
      payment methods available on the beGateway platform.
      It can help you select the appropriate connector and payment
      options for your PSP. Additionally, you can find all shopping
      cart payment modules to facilitate easy integration
      with your payment platform, which is built on the beGateway base.
      </p>
    </div>
  )
}
