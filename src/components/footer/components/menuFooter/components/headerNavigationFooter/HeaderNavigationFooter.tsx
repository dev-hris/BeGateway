import { FC, useCallback, useMemo } from "react";
import { useNavigate } from "react-router";

import { IHeaderLink } from "../../../../../../utils/types/headerTypes";
import { getAllAdditionalLinks } from "../../config/getAllAdditionalLinks";

import styles from "./headerNavigationFooter.module.scss";

interface HeaderNavigationFooterProps {
  values: IHeaderLink;
}

export const HeaderNavigationFooter: FC<HeaderNavigationFooterProps> = ({
  values,
}) => {
  const navigate = useNavigate();
  const links = useMemo(() => getAllAdditionalLinks(values), [values]);
  const onClick = useCallback((path: string | null) => {
    navigate(path ?? "/");
  }, [navigate]);

  return (
    <div className={styles.container} style={{gridArea: values.id}}>
      <div onClick={() => onClick(values.link)} className={styles.headerNavigation}>
        {values.id === "features" ? "beGateway features" : values.name}
      </div>
      {links?.map((value) => (
        <div onClick={() => onClick(value.link)} key={value.id} className={styles.additionalNavigate}>{value.name}</div>
      ))}
    </div>
  );
};
