import { FC } from "react";

import { CarouselWrapper } from "../carouselWrapper/CarouselWrapper";

import { cards } from "./config/cardsConstants";
import { pays } from "./config/paysConstants";
import { alternativePaymentsConstants } from "./config/alternativePaymentsConstants";
import { bankTransfers } from "./config/bankTransfersConstants";

import styles from "./acceptGlobalPayments.module.scss";

export const AcceptGlobalPayments: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>Accept global payments</div>
        <p className={styles.description}>
          beGateway offers support for ALL currencies,global payment brands,
          CRYPTO, as well as dozens of local payment methods. By accepting a
          wide range of payment methods, we can help your PSP expand its global
          reach and improve the checkout conversion rates for your merchants.
        </p>
      </div>
      <div className={styles.carouselsWrapper}>
        <div className={styles.block} />
        <CarouselWrapper title={{text: "Cards"}}>
          {cards.map((card) => (
            <img
              className={styles.img}
              alt={card.name}
              key={card.id}
              src={card.img}
            />
          ))}
        </CarouselWrapper>

        <CarouselWrapper
          title={{text:"Wallets and card storage services"}}
          description={{ theme: "white" }}
        >
          {pays.map((card) => (
            <img
              className={styles.img}
              alt={card.name}
              key={card.id}
              src={card.img}
            />
          ))}
        </CarouselWrapper>

        <CarouselWrapper
          title={{text:"Alternative payment methods"}}
          description={{ theme: "black" }}
        >
          {alternativePaymentsConstants.map((cards, index) => (
            <div className={styles.imgWrapper} key={index}>
              {cards.map((card) => (
                <img
                  alt={card.name}
                  key={card.id}
                  src={card.img}
                />
              ))}
            </div>
          ))}
        </CarouselWrapper>

        <CarouselWrapper
          title={{
            text: "Bank transfers",
            theme: "black"
          }}
          description={{ theme: "black" }}
        >
          {bankTransfers.map((cards, index) => (
            <div className={styles.imgWrapper} key={index}>
              {cards.map((card) => (
                <img
                  alt={card.name}
                  key={card.id}
                  src={card.img}
                />
              ))}
            </div>
          ))}
        </CarouselWrapper>
      </div>
    </div>
  );
};
