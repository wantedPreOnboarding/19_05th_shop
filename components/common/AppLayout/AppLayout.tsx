import React from 'react';
import { AppLayoutProps } from './AppLayout.type';
import * as S from './AppLayout.styled';
import { StatusBar, TitleBar, ChildrenContent } from 'components';

import { SERVICE_CENTER } from 'consts/constants';
const AppLayout = ({ title, backPath, children }: AppLayoutProps) => {
  return (
    <S.Background>
      <S.Layout>
        {title && title === SERVICE_CENTER ? '' : <StatusBar />}
        <TitleBar title={title} backPath={backPath} />
        <ChildrenContent>{children}</ChildrenContent>
      </S.Layout>
    </S.Background>
  );
};

export default AppLayout;
