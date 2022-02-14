import React, { useState, MouseEvent, Touch, TouchEvent } from 'react';
import * as S from './TabMenu.styled';
import TabMenuProps from './TabMenu.type';
import { SCProps } from 'types/props';

const TabMenu = ({ menuData, tabType, selectedMenu }: SCProps<TabMenuProps>) => {
  return (
    <S.TabMenuContainer>
      {tabType === 'category' && (
        <S.TabMenuWrapper>
          {menuData.map(item =>
            item.id === selectedMenu ? (
              <S.TabMenuItem selected key={item.key}>
                {item.name}
              </S.TabMenuItem>
            ) : (
              <S.TabMenuItem key={item.key}>{item.name}</S.TabMenuItem>
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
