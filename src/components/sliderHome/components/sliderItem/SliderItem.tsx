import React from "react";

import { ISliderHomeItem } from "../../../../utils/types/sliderHomeTypes";

import styles from "./sliderItem.module.scss";

interface SliderItemProps {
  values: ISliderHomeItem
}

export const SliderItem: React.FunctionComponent<SliderItemProps> = (
  {values}
) => {
  const {text: {title, description}, img} = values;
  return <div className={styles.container}>
    <div className={styles.textWrapper}>
      <h3 className={styles.title}>
        {title}
      </h3>
      <p className={styles.description}>
        {description}
      </p>
    </div>
    <div className={styles.imgWrapper}>
      <img src={img} alt="" className={styles.img} />
    </div>
  </div>
}
