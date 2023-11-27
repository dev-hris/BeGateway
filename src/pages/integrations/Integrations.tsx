import React from 'react';

import { WelcomeBlockIntegrations } from './components/welcomeBlockIntegrations/WelcomeBlockIntegrations';
import { ConnectorsWithBanks } from './components/connectorsWithBanks/ConnectorsWithBanks';
import { AcceptGlobalPayments } from './components/acceptGlobalPayments/AcceptGlobalPayments';
import { OfferMerchants } from './components/offerMerchants/OfferMerchants';
import HeaderBlock from '../../components/headerBlock/HeaderBlock';

import img from "../../assets/images/test.png"

import styles from "./integrations.module.scss";

export const Integrations: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <HeaderBlock src={img} />
      <WelcomeBlockIntegrations />
      <ConnectorsWithBanks />
      <AcceptGlobalPayments />
      <OfferMerchants />
    </div>
  )
}

export default Integrations;
