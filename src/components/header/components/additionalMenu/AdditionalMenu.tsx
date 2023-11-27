import { FunctionComponent } from "react";

import { useOutsideClick } from "../../../../utils/hooks/useOutsideClick";
import cn from "classnames";

import { AdditionalMenuItem } from "../additionalMenuItem/AdditionalMenuItem";

import {ReactComponent as PartAdditionalMenu} from "../../../../assets/icons/partAdditionalMenu.svg";

import { IValuesMenuLink } from "../../../../utils/types/headerTypes";

import styles from "./additionalMenu.module.scss";

interface AdditionalMenuProps {
  values: IValuesMenuLink[];
  positionHeaderLink: number;
  handleOutSideClick?: () => void;
}

export const AdditionalMenu: FunctionComponent<AdditionalMenuProps> = ({
  values,
  positionHeaderLink,
  handleOutSideClick,
}) => {
  const ref = useOutsideClick<HTMLDivElement>({callback: handleOutSideClick});

  const isCenter = positionHeaderLink > 1;
  const countValues = values.length < 4 ? values.length : 4;
  return <div
    ref={ref}
    onClick={e => e.stopPropagation()}
    className={cn(styles.container, {[styles.center]: isCenter})}
  >
    <div className={styles.part}>
      <PartAdditionalMenu />
    </div>
    <div
      style={{gridTemplateRows: `repeat(${countValues}, auto)`}}
      className={styles.contentWrapper}
    >
      {values.map(value => <AdditionalMenuItem key={value.id} handleClose={handleOutSideClick} value={value} />)}
    </div>
  </div>;
};
