import { ItemThumbnail } from 'components/common';
import * as S from './Items.styled';

import React from 'react';
import { TextsSection } from 'components/items';

const Items = () => {
  return (
    <S.ItemsLayout>
      <S.PaddedItemThumbnail
        brand="스타벅스"
        ItemName="상품명"
        discountRate={30}
        minSellingPrice={3000}
        originalPrice={3000}
      ></S.PaddedItemThumbnail>
      <TextsSection
        sectionTitle="유의사항"
        texts={[
          '쿠폰 사용시 유효기간 내 사용이 가능 합니다.',
          '포인트 적립 및 제휴카드 할인 등은 교화넟의 정책에 따릅니다.',
        ]}
      />
    </S.ItemsLayout>
  );
};

export default Items;
