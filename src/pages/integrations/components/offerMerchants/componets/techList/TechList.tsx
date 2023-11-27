import React, { FC, useMemo } from "react";

import cn from "classnames";

import styles from "./techList.module.scss";

interface TechListProps {
  title: string;
  list: string[];
  className?: string;
}

export const TechList: FC<TechListProps> = ({ title, list, className }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={cn(styles.listWrapper, className)}>
        {list.map((item, index) => (
          <div key={index} className={styles.itemListWrapper}>
            <div className={styles.line} />
            <div className={styles.itemList}>{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
