import React from 'react';
import { AppLayoutProps } from './AppLayout.type';
import * as S from './AppLayout.styled';
import { StatusBar, TitleBar, ChildrenContent } from 'components';
import { useRouter } from 'next/router';

const AppLayout = ({ title, children }: AppLayoutProps) => {
  const router = useRouter();
  const pathName = router.pathname.split('/')[1];
  return (
    <S.Background>
      <S.Layout>
        {pathName && pathName !== 'contacts' ? '' : <StatusBar pathName={pathName} />}
        <TitleBar title={title} />
        <ChildrenContent>{children}</ChildrenContent>
      </S.Layout>
    </S.Background>
  );
};

export default AppLayout;
