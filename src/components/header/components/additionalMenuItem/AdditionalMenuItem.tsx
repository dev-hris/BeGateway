import { FunctionComponent } from "react";

import styles from "./additionalMenuItem.module.scss";
import { IValuesMenuLink } from "../../../../utils/types/headerTypes";
import { NavLink, useLocation } from "react-router-dom";
import { useAppDispatch } from "../../../../utils/hooks/hooksRedux";
import { setIsOpen } from "../../../../store/reducers/shadowBlockSlice";

interface AdditionalMenuItemProps {
  value: IValuesMenuLink;
  handleClose: (() => void) | undefined;
}

export const AdditionalMenuItem: FunctionComponent<AdditionalMenuItemProps> = ({
  value,
  handleClose,
}) => {
  const dispatch = useAppDispatch();
  const {pathname} = useLocation();
  const handleClick = () => {
    handleClose && handleClose()
    dispatch(setIsOpen(false))
  }
  const { link, name } = value;
  return (
    <div className={styles.container}>
      <NavLink
        onClick={handleClick}
        to={link || ""}
        className={styles.linkWrapper}
      >
        {name}
      </NavLink>
      { pathname === link && <div className={styles.activeCursor} /> }
    </div>
  );
};
