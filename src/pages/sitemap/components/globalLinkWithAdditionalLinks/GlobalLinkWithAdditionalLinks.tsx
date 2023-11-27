import React, { FC, useCallback } from "react";

import { useNavigate } from "react-router-dom";

import { IHeaderLink } from "../../../../utils/types/headerTypes";

import styles from "./globalLinkWithAdditionalLinks.module.scss";

interface GlobalLinkWithAdditionalLinksProps {
  values: IHeaderLink;
}

export const GlobalLinkWithAdditionalLinks: FC<
  GlobalLinkWithAdditionalLinksProps
> = ({ values }) => {
  const navigate = useNavigate();

  const onClick = useCallback(
    (link: string | null) => {
      navigate(link ?? "/");
    },
    [navigate]
  );
  return (
    <div style={{ gridArea: values.id }} className={styles.container}>
      <div onClick={() => onClick(values.link)} className={styles.globalLink}>
        {values.id === "features" ? "beGateway features" : values.name}
      </div>
      {values.additionalMenu && (
        <div className={styles.additionalLinks}>
          {values.additionalMenu.map((value) => (
            <div
              key={value.id}
              onClick={() => onClick(value.link)}
              className={styles.additionalLink}
            >
              {value.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
