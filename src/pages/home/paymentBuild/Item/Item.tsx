import React, {useState, ReactElement} from 'react';
import cn from 'classnames';

import styles from './item.module.scss';

type Props = {
  item: ReactElement;
  hoverItem: ReactElement;
  isBlack?: boolean;
  title: string;
};

export const Item: React.FunctionComponent<Props> = ({
    item,
    hoverItem,
    isBlack = false,
    title,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={styles.itemBlock}>
        <div className={styles.container}>
            <div className={cn({[styles.orange]: isBlack && isHovered},
            {[styles.black]: isBlack && !isHovered}, styles.wrapper)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                    {isHovered ? hoverItem : item}
            </div>
        </div>
        <div className={styles.title}>{title}</div>
    </div>
  );
}

export default Item;
