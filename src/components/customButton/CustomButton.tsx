import React, { ReactElement } from "react";
import cn from "classnames";

import { ButtonVariant } from "../../utils/constants/buttonVariantEnum";

import { ReactComponent as ArrowRight } from "../../assets/icons/arrowRightOrange.svg";

import styles from "./customButton.module.scss";

type CustomButtonProps = {
  children?: ReactElement | string;
  className?: string;
  onClick: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  variant: ButtonVariant;
  disabled?: boolean;
};

const variantsStyle: Partial<Record<ButtonVariant, string>> = {
  [ButtonVariant.Primary]: styles.btnPrimary,
  [ButtonVariant.OutLine]: styles.btnOutLine,
};

export const CustomButton: React.FunctionComponent<CustomButtonProps> = ({
  children,
  className,
  variant,
  onClick,
  disabled = false,
}) => {
  if (variant === ButtonVariant.Redirect) {
    return (
      <button onClick={onClick} disabled={disabled} className={cn(className, styles.requestWrapper)}>
        <div className={styles.arrow}>
          <ArrowRight />
        </div>
        <div className={styles.text}>{children}</div>
      </button>
    );
  }
  return (
    <button
      className={cn(className, styles.container, variantsStyle[variant])}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
