import { FunctionComponent, useEffect } from "react";

import styles from "./shadowBlock.module.scss";
import { useAppDispatch } from "../../utils/hooks/hooksRedux";
import { setIsOpen } from "../../store/reducers/shadowBlockSlice";

interface ShadowBlockProps {
  children?: JSX.Element | JSX.Element[];
}

export const ShadowBlock: FunctionComponent<ShadowBlockProps> = ({
  children,
}) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(setIsOpen(false));
  };
  return (
    <div className={styles.container} onClick={handleClick}>
      {children}
    </div>
  );
};
