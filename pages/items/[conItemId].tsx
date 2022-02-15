import * as S from './Items.styled';

import React, { ReactNode } from 'react';
import { AppLayout, FullWidthButton } from 'components/common';
import { TextsSection } from 'components/items';
import { GetServerSideProps } from 'next';
import { get } from 'apis/requestAPIs/items';
import ItemAPIType from 'apis/models/Items.type';

const indexGenerator = (caution: string, index: number) => ({ id: index, text: caution });

const Items = ({ data }: { data: ItemAPIType['conItem'] }) => {
  const {
    name: itemName,
    conCategory2: brandInfo,
    discountRate,
    minSellingPrice,
    originalPrice,
    warning,
  } = data;

  const brandCautionList = brandInfo.info.split('\n').map(indexGenerator);

  const itemCautionList = brandInfo.conCategory1.info.split('\n').map(indexGenerator);

  const refundRuleList = warning
    .slice(warning.indexOf('[환불규정]'))
    .split('\n')
    .map(caution => caution.replace(' -', '·'))
    .slice(1)
    .map(indexGenerator);

  return (
    <S.ItemsLayout>
      <S.PaddedItemThumbnail
        brand={brandInfo.name}
        ItemName={itemName}
        discountRate={discountRate}
        minSellingPrice={minSellingPrice}
        originalPrice={originalPrice}
      />
      {brandInfo.info && (
        <TextsSection sectionTitle="브랜드 별 유의사항" texts={brandCautionList} />
      )}
      {brandInfo.conCategory1.info && (
        <TextsSection sectionTitle="유의사항" texts={itemCautionList} />
      )}
      {warning && <TextsSection sectionTitle="환불규정" texts={refundRuleList} />}
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
  const { conItemId } = context.query;

  const data = typeof conItemId === 'string' ? await get.items(conItemId) : null;

  return { props: { data: data?.conItem } };
};

export default Items;
