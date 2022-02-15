import React from 'react';
import { AppLayout } from 'components/common';
import { commaNumber } from 'utils';
import BrandsProps from './Brands.type';
import { GetServerSideProps } from 'next';
import { get } from 'apis/requestAPIs/categories';
import * as S from './Brands.styled';

const Brands = ({ name, data }: BrandsProps) => {
  return (
    <AppLayout title={name}>
      <S.List>
        {data.map(item => {
          const saleResult = `${(item.originalPrice - item.minSellingPrice) * 0.01}`;
          return (
            <S.Item key={item.id}>
              <S.ImgWrapper>
                <img src={item.imageUrl} alt={item.name} />
              </S.ImgWrapper>
              <div>
                <S.Title>{item.name}</S.Title>
                <S.Sale>{saleResult.substring(0, 2)}%</S.Sale>
                <S.Price>{commaNumber(item.originalPrice)}원</S.Price>
                <S.MinPrice>{commaNumber(item.minSellingPrice)}원</S.MinPrice>
              </div>
            </S.Item>
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
      : null;
  return {
    props: {
      name: category2?.name,
      data: category2?.conItems,
    },
  };
};
export default Brands;
