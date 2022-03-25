import * as S from './index.styled';
import { OptionViewer, TextsSection } from './innerPaths';

import React, { ReactElement } from 'react';
import ItemProps from './index.type';

const indexGenerator = (caution: string, index: number) => ({ id: index, text: caution });

const Items = ({ data }: ItemProps): ReactElement => {
  const {
    name: itemName,
    conCategory2: brandInfo,
    discountRate,
    minSellingPrice,
    originalPrice,
    warning,
    options,
    imageUrl,
  } = data;

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

export default Items;
