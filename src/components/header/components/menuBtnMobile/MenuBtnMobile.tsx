import { FunctionComponent } from "react";

import { ReactComponent as Menu } from "../../../../assets/icons/menu.svg";

import { useAppDispatch } from "../../../../utils/hooks/hooksRedux";
import { setIsOpen } from "../../../../store/reducers/shadowBlockSlice";

import styles from "./menuBtnMobile.module.scss";

export const MenuBtnMobile: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(setIsOpen(true));
  };
  return (
    <div className={styles.container}>
      <div className={styles.btn} onClick={handleClick}>
        <Menu />
      </div>
    </div>
  );
};
