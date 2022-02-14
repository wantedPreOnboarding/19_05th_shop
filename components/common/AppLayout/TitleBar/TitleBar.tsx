import React from 'react';
import * as S from './TitleBar.styled';
import { TitleProps } from '../AppLayout.type';
const TitleBar = ({ title }: TitleProps) => {
  return (
    <S.Wrapper>
      <S.TitleBtn
        src={`${process.env.REACT_APP_ASSET_PATH}/hamburgerBtn.svg`}
        width="30px"
        height="30px"
      />
      {title && <S.PageTitle>{title}</S.PageTitle>}
    </S.Wrapper>
  );
};

export default TitleBar;
