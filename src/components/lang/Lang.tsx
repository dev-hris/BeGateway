import { FunctionComponent } from "react";

import { ReactComponent as ArrowDown } from "../../assets/icons/arrowDown.svg";

import styles from "./lang.module.scss";

export const Lang: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div>EN</div>
      <ArrowDown />
    </div>
  );
};
