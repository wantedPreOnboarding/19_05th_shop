import React, { useState } from 'react';
import { AppLayoutProps } from './AppLayout.type';
import * as S from './AppLayout.styled';
import StatusBar from './StatusBar/StatusBar';
import ChildrenContent from './ChildrenContent/ChildrenContent';
import TitleBar from './TitleBar/TitleBar';

import { SERVICE_CENTER } from 'consts/constants';
import SideMenu from './SideMenu/SideMenu';
const AppLayout = ({ title, backPath, children }: AppLayoutProps) => {
  const [openSideMenu, setOpenSideMenu] = useState<boolean>(false);
  const sideMenuHandler = (): void => {
    setOpenSideMenu(!openSideMenu);
  };
  return (
    <S.Background>
      <S.Layout>
        {title && title === SERVICE_CENTER ? '' : <StatusBar />}
        <TitleBar title={title} backPath={backPath} sideMenuHandler={sideMenuHandler} />
        <ChildrenContent>{children}</ChildrenContent>
        <SideMenu sideMenuHandle={sideMenuHandler} openSideMenu={openSideMenu} />
      </S.Layout>
    </S.Background>
  );
};

export default AppLayout;
