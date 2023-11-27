import React from "react";

import cn from "classnames";

import styles from "./step.module.scss";

interface StepProps {
  isActive: boolean;
  index: number;
  handleClick: (index: number) => void
}

export const Step: React.FunctionComponent<StepProps> = ({
  isActive,
  index,
  handleClick,
}) => {
  const onClick = () => {
    handleClick(index)
  }
  return <div
    onClick={onClick}
    className={cn(styles.container, {[styles.active]: isActive})}
  />;
}
