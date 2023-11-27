import React, {ReactElement} from 'react';

import styles from './itemAdaptive.module.scss';

type Props = {
  title: string;
  content: ReactElement;
};

export const ItemAdaptive: React.FunctionComponent<Props> = ({
    title,
    content,
}) => {

  return (
    <div className={styles.itemBlock}>
      <h1 className={styles.title}>{title}</h1>
      {content}
    </div>
  );
}

export default ItemAdaptive;
