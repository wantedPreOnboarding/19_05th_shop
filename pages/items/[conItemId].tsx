import { ItemThumbnail } from 'components/common';
import * as S from './Items.styled';

import React from 'react';
import { FullWidthButton } from 'components/common';
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
      />
      <TextsSection
        sectionTitle="유의사항"
        texts={[
          {
            id: 0,
            text: '쿠폰 사용시 유효기간 내 사용이 가능 합니다.',
          },
          {
            id: 1,
            text: '포인트 적립 및 제휴카드 할인 등은 교화넟의 정책에 따릅니다.',
          },
        ]}
      />
      <TextsSection
        sectionTitle="환불규정"
        texts={[
          {
            id: 0,
            text: '쿠폰 사용시 유효기간 내 사용이 가능 합니다.',
          },
          {
            id: 1,
            text: '포인트 적립 및 제휴카드 할인 등은 교화넟의 정책에 따릅니다.',
          },
        ]}
      />
      <FullWidthButton className="purchase-btn" backgroundColor="sideMenuRed" color="white">
        옵션 선택하기
      </FullWidthButton>
    </S.ItemsLayout>
  );
};

export default Items;
