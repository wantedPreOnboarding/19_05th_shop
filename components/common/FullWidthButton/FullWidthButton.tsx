import React, { ReactElement } from 'react';
import { SCProps } from 'types/props';
import FullWidthButtonProps from './FullWidthButton.type';
import * as S from './FullWidthButton.styled';

const FullWitdhButton = ({
  className,
  children,
  backgroundColor,
  color,
}: SCProps<FullWidthButtonProps>): ReactElement => (
  <S.FullWidthButton className={className} backgroundColor={backgroundColor} color={color}>
    {children}
  </S.FullWidthButton>
);
export default FullWitdhButton;
