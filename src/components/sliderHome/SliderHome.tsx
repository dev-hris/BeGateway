import React from "react";

import { Slider } from "../slider/Slider";
import { SliderItem } from "./components/sliderItem/SliderItem";

import { sliderHomeConstants } from "../../utils/constants/sliderHomeConstants";

import styles from "./sliderHome.module.scss";

export const SliderHome: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.block} />
      <Slider>
        {sliderHomeConstants.map((values, index) => (
          <SliderItem key={index} values={values} />
        ))}
      </Slider>
    </div>
  );
};
