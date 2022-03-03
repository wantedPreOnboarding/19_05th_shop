import React, { ReactNode } from 'react';
import { AppLayout } from 'components/common';
import { OptionViewer, TextsSection } from 'components/items';
import * as S from 'components/items/Items.styled';
import { get } from 'apis/requestAPIs/items';
import { useRouter } from 'next/router';
import useSWR from 'swr';

const indexGenerator = (caution: string, index: number) => ({ id: index, text: caution });

const Items = () => {
  const router = useRouter();
  const { conItemId } = router.query;

  const { data } = useSWR(conItemId, (conItemId: string) => get.items(conItemId));

  if (!data) {
    return <div>loadding</div>;
  }

  const {
    name: itemName,
    conCategory2: brandInfo,
    discountRate,
    minSellingPrice,
    originalPrice,
    warning,
    options,
    imageUrl,
  } = data.conItem;

  const brandCautionList = brandInfo.info?.split('\n').map(indexGenerator);

  const itemCautionList = brandInfo.conCategory1.info?.split('\n').map(indexGenerator);

  const refundRuleList = warning
    ?.slice(warning.indexOf('[환불규정]'))
    ?.split('\n')
    ?.map(caution => caution.replace(' -', '·'))
    ?.slice(1)
    ?.map(indexGenerator);

  return (
    <S.ItemsLayout>
      <S.PaddedItemThumbnail
        imageUrl={imageUrl}
        brand={brandInfo.name}
        itemName={itemName}
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
      <OptionViewer
        options={options}
        minSellingPrice={minSellingPrice}
        originalPrice={originalPrice}
      />
    </S.ItemsLayout>
  );
};

Items.getLayout = function getLayout(page: ReactNode) {
  return <AppLayout>{page}</AppLayout>;
};

export default Items;
