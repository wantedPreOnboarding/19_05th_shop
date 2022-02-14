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
      <TextsSection
        sectionTitle="환불규정"
        texts={[
          '니콘내콘에서 판매되는 쿠폰은 개인 간 거래를 통해 리셀링되는  상품으로 환불 및 유효기간 연장이 불가합니다.',
          '쿠폰 사용이 불가할 경우, 카카오톡 플러스친구 @니콘내콘으로  문의해주시기 바랍니다.',
        ]}
      />
    </S.ItemsLayout>
  );
};

export default Items;
