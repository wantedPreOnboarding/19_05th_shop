import React from 'react';
import { AppLayout, ItemThumbnail } from 'components/common';
import { tensDigit } from 'utils';
import BrandsProps from 'components/brands/Brand.type';
import { GetServerSideProps } from 'next';
import { get } from 'apis/requestAPIs/categories';
import * as S from 'components/brands/Brand.styled';

const Brands = ({ name, data }: BrandsProps) => {
  return (
    <AppLayout title={name}>
      <S.CountBox>
        {tensDigit(data.length)}
        <span>개의 상품</span>
      </S.CountBox>
      <S.List>
        {data.map(item => {
          const discountRate = parseInt(`${(item.originalPrice - item.minSellingPrice) * 0.01}`);
          const newItem = {
            href: `/items/${item.id}`,
            id: item.id,
            itemName: item.name,
            originalPrice: item.originalPrice,
            minSellingPrice: item.minSellingPrice,
            imageUrl: item.imageUrl,
            discountRate,
          };
          return (
            <S.Box key={item.id}>
              <ItemThumbnail {...newItem} />
            </S.Box>
          );
        })}
      </S.List>
    </AppLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const { category2Id, category1Id } = context.query;

  const data = typeof category1Id === 'string' ? await get.categories(category1Id) : null;
  const category2 =
    typeof category2Id === 'string'
      ? data?.conCategory1?.conCategory2s?.find(conCategory2 => +conCategory2.id === +category2Id)
      : undefined;

  return {
    props: category2
      ? {
          name: category2?.name,
          data: category2?.conItems,
        }
      : {},
  };
};
export default Brands;
