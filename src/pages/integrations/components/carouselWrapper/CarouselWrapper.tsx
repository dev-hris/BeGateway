import React, { FC } from "react";

import cn from "classnames";
import { Carousel } from "@mantine/carousel";

import styles from "./carouselWrapper.module.scss";


interface CarouselWrapperProps {
  children: JSX.Element[];
  title: {
    theme?: "black" | "white";
    text: string;
  };
  description?: {
    theme: "white" | "black";
  };
}
export const CarouselWrapper: FC<CarouselWrapperProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className={styles.container}>
      <h1 className={cn(styles.title, {[styles[title.theme!]]: title.theme})}>{title.text}</h1>
      <Carousel
        withControls={false}
        initialSlide={0}
        align={"start"}
        loop
      >
        {children}
      </Carousel>
      {
        description &&
        <p className={cn(styles.description, styles[description.theme])}>
          No required payment method in the list? Please, <span className={styles.description__orange}>contact sales</span>.<br />
          Maybe, the payment method is being implemented right now or can be added to the integration wish-list.
        </p>
      }
    </div>
  );
};
