import React, {ReactElement} from 'react';
import cn from 'classnames';

import {ButtonVariant} from '../../utils/constants/buttonVariantEnum';

import styles from './customButton.module.scss';

type CustomButtonProps = {
  children?: ReactElement | string;
  className?: string;
  onClick: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  variant: ButtonVariant;
  disabled?: boolean;
};

const variantsStyle: Partial<Record<ButtonVariant, string>> = {
  [ButtonVariant.Primary]: styles.btnPrimary,
};

export const CustomButton: React.FunctionComponent<CustomButtonProps> = ({
  children,
  className,
  variant,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={cn(
        className, styles.container, variantsStyle[variant])}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
