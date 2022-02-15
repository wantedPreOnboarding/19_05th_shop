import * as S from './Items.styled';

import React, { ReactNode } from 'react';
import { AppLayout, FullWidthButton } from 'components/common';
import { TextsSection } from 'components/items';
import { GetServerSideProps } from 'next';
import { get } from 'apis/requestAPIs/items';
import ItemProps from './Items.type';

const Items = ({ data }: ItemProps) => {
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

Items.getLayout = function getLayout(page: ReactNode) {
  return <AppLayout>{page}</AppLayout>;
};

export const getServerSideProps: GetServerSideProps = async context => {
  const { category1Id } = context.query;

  const data = typeof category1Id === 'string' ? await get.items(category1Id) : null;

  return { props: { data: data } };
};

export default Items;
