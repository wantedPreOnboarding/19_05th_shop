import React, { ReactElement } from 'react';
import { SCProps } from 'types/props';
import FullWidthButtonProps from './FullWidthButton.type';
import * as S from './FullWidthButton.styled';

const FullWitdhButton = ({
  className,
  children,
  backgroundColor,
  color,
  onClick,
}: SCProps<FullWidthButtonProps>): ReactElement => (
  <S.FullWidthButton
    onClick={onClick}
    className={className}
    backgroundColor={backgroundColor}
    color={color}
  >
    {children}
  </S.FullWidthButton>
);
export default FullWitdhButton;
