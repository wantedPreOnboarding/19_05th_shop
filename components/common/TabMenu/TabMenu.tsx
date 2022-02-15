import React from 'react';
import { useRouter } from 'next/router';
import TabMenuProps from './TabMenu.type';
import { TAB_MENU_CATEGORY, TAB_MENU_FAQ } from 'consts/constants';
import * as S from './TabMenu.styled';

const TabMenu = ({ menuData, tabType, qaType, setSelectType }: TabMenuProps) => {
  const router = useRouter();

  const SELECTED_MENU = router.query.id;

  return (
    <S.TabMenuContainer>
      {tabType === TAB_MENU_CATEGORY && (
        <S.TabMenuWrapper>
          {menuData.map(item =>
            item.id === SELECTED_MENU ? (
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

      {tabType === TAB_MENU_FAQ && (
        <S.TabMenuFlexWrapper>
          {menuData?.map(item =>
            item.id === qaType ? (
              <S.TabMenuFnqItem selected key={item.key} onClick={() => setSelectType(item.id)}>
                {item.name}
              </S.TabMenuFnqItem>
            ) : (
              <S.TabMenuFnqItem key={item.key} onClick={() => setSelectType(item.id)}>
                {item.name}
              </S.TabMenuFnqItem>
            ),
          )}
        </S.TabMenuFlexWrapper>
      )}
    </S.TabMenuContainer>
  );
};

export default TabMenu;
