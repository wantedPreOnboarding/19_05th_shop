import { useState } from 'react';
import { AppLayoutProps } from './AppLayout.type';
import * as S from './AppLayout.styled';
import StatusBar from './StatusBar/StatusBar';
import ChildrenContent from './ChildrenContent/ChildrenContent';
import TitleBar from './TitleBar/TitleBar';
import MyPage from 'components/index/MyPage/MyPage';

import { SERVICE_CENTER } from 'consts/constants';
import Head from 'next/head';
const AppLayout = ({ title, children }: AppLayoutProps) => {
  const [openSideMenu, setOpenSideMenu] = useState<boolean>(false);
  const sideMenuHandler = (): void => {
    setOpenSideMenu(!openSideMenu);
  };
  return (
    <S.Background>
      <Head>
        <title>너와나의 콘콘 {title}</title>
        <meta name="og:title" content={`너와나의 콘콘 ${title}`} />
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
