import React from "react";

import { Step } from "./components/step/Step";

import styles from "./slider.module.scss";
import { useSlider } from "../../utils/hooks/useSlider";

interface SliderProps {
  children: JSX.Element[];
}

export const Slider: React.FunctionComponent<SliderProps> = ({ children }) => {
  const {
    ref,
    activeIndex,
    setActiveIndex,
    onMouseUp,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  } = useSlider(children.length);
  return (
    <div className={styles.container}>
      <div
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseUp={onMouseUp}
        className={styles.contentWrapper}
        ref={ref}
      >
        {children.map((child, index) => (
          <div className={styles.oneContentWrapper} key={index}>
            {child}
          </div>
        ))}
      </div>
      <div className={styles.stepperWrapper}>
        <div className={styles.stepper}>
          {children.map((_, index) => (
            <Step
              key={index}
              isActive={index === activeIndex}
              index={index}
              handleClick={setActiveIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
