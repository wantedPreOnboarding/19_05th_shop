import React from 'react';
import { useRouter } from 'next/router';
import { SCProps } from 'types/props';
import TabMenuProps from './TabMenu.type';
import * as S from './TabMenu.styled';

const TabMenu = ({ menuData, tabType }: SCProps<TabMenuProps>) => {
  const router = useRouter();
  const selectedMenu = router.query.id;

  return (
    <S.TabMenuContainer>
      {tabType === 'category' && (
        <S.TabMenuWrapper>
          {menuData.map(item =>
            item.id === selectedMenu ? (
              <S.TabMenuItem
                selected
                key={item.key}
                onClick={() => router.push(`/categories/${item.id}`)}
              >
                {item.name}
              </S.TabMenuItem>
            ) : (
              <S.TabMenuItem key={item.key} onClick={() => router.push(`/categories/${item.id}`)}>
                {item.name}
              </S.TabMenuItem>
            ),
          )}
        </S.TabMenuWrapper>
      )}

      {tabType === 'faq' && (
        <S.TabMenuFlexWrapper>
          {menuData.map(item =>
            item.id === selectedMenu ? (
              <S.TabMenuFnqItem selected key={item.key}>
                {item.name}
              </S.TabMenuFnqItem>
            ) : (
              <S.TabMenuFnqItem key={item.key}>{item.name}</S.TabMenuFnqItem>
            ),
          )}
        </S.TabMenuFlexWrapper>
      )}
    </S.TabMenuContainer>
  );
};

export default TabMenu;
