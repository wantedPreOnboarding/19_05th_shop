import React, { ReactElement } from 'react';
import { DiscountCon } from './DiscountItem.type';
import * as S from './DiscountItem.styled';
import { commaNumber } from 'uilts';
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
              <S.Box key={disItem.name}>
                <S.ImageBox>
                  <img src={disItem.imageUrl} />
                </S.ImageBox>
                <S.InfoBox>
                  <S.BrandName>{disItem.brand}</S.BrandName>
                  <S.TitleName>{disItem.name}</S.TitleName>
                  <S.PriceBox>
                    <S.DiscountPrice> {disItem.discountRate}% </S.DiscountPrice>
                    <span>{commaNumber(disItem.minSellingPrice)}원</span>
                    <S.OriginalPrice>
                      <del> {commaNumber(disItem.originalPrice)}원</del>
                    </S.OriginalPrice>
                  </S.PriceBox>
                </S.InfoBox>
              </S.Box>
            );
          })}
      </S.Wrapper>
    </>
  );
};

export default DiscountItem;
