import React from 'react';
import { AppLayoutProps } from '../AppLayout.type';
import * as S from './ChildrenContent.styled';
const ChildrenContent = ({ children }: AppLayoutProps) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default ChildrenContent;
