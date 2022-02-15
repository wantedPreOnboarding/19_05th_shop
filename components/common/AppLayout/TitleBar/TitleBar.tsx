import React from 'react';
import * as S from './TitleBar.styled';
import { TitleBarProps } from './TitleBar.type';
import Link from 'next/link';
import { YOUCON_MYCON, SERVICE_CENTER } from 'consts/constants';

const TitleBar = ({ title, backPath, sideMenuHandler }: TitleBarProps) => {
  return (
    <S.Wrapper title={title}>
      {title === YOUCON_MYCON ? (
        <S.LeftBtn
          src={`${process.env.ASSET_PATH}/hamburgerBtn.svg`}
          width="30px"
          height="30px"
          onClick={sideMenuHandler}
        />
      ) : backPath ? (
        <Link href={backPath}>
          <S.LeftBtn src={`${process.env.ASSET_PATH}/back.svg`} width="17px" height="17px" />
        </Link>
      ) : (
        ''
      )}
      {title && <S.PageTitle>{title}</S.PageTitle>}
      {title === SERVICE_CENTER && backPath && (
        <Link href={backPath}>
          <S.CancleBtn src={`${process.env.ASSET_PATH}/close.svg`} width="16px" height="16px" />
        </Link>
      )}
    </S.Wrapper>
  );
};

export default TitleBar;
