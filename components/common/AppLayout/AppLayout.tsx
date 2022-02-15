import React, { useState } from 'react';
import { AppLayoutProps } from './AppLayout.type';
import * as S from './AppLayout.styled';
import StatusBar from './StatusBar/StatusBar';
import ChildrenContent from './ChildrenContent/ChildrenContent';
import TitleBar from './TitleBar/TitleBar';
import MyPage from 'components/index/MyPage/MyPage';

import { SERVICE_CENTER } from 'consts/constants';
import Head from 'next/head';
const AppLayout = ({ title, backPath, children }: AppLayoutProps) => {
  const [openSideMenu, setOpenSideMenu] = useState<boolean>(false);
  const sideMenuHandler = (): void => {
    setOpenSideMenu(!openSideMenu);
  };
  return (
    <S.Background>
      <Head>
        <title>너와나의 콘콘 {title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="원티드X위코드 프론트엔드 프리온보딩 2기 취업하구19조 5번째 프로젝트입니다."
        ></meta>
        <meta name="og:title" content={`너와나의 콘콘 ${title}`} />
        <meta
          name="og:description"
          content="원티드X위코드 프론트엔드 프리온보딩 2기 취업하구19조 5번째 프로젝트입니다."
        />
      </Head>
      <S.Layout>
        {title && title === SERVICE_CENTER ? '' : <StatusBar />}
        <TitleBar title={title} sideMenuHandler={sideMenuHandler} />
        <ChildrenContent>{children}</ChildrenContent>
        <MyPage sideMenuHandle={sideMenuHandler} openSideMenu={openSideMenu} />
      </S.Layout>
    </S.Background>
  );
};

export default AppLayout;
