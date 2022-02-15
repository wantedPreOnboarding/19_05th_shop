import React from 'react';
import { DiscountCon } from './DiscountItem.type';
import * as S from './DiscountItem.styled';
import { ItemThumbnail } from 'components/common';

const DiscountItem = ({ disItems }: DiscountCon) => {
  return (
    <>
      <S.Wrapper>
        <S.MenuTitle>
          <span>놓치지 마세요</span> 오늘의 땡처리콘!
        </S.MenuTitle>
        {disItems &&
          disItems.map(disItem => {
            return (
              <S.Box>
                <ItemThumbnail {...disItem} />{' '}
              </S.Box>
            );
          })}
      </S.Wrapper>
    </>
  );
};

export default DiscountItem;
