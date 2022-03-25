import React, { ReactElement } from 'react';
import { ItemThumbnail } from 'components/common';
import * as S from 'components/brands/index.styled';
import BrandsProps from './index.type';
import { tensDigit } from 'utils';

const Brands = ({ data: brand }: BrandsProps): ReactElement => {
  if (!brand?.conItems) {
    return <div>상품이 없습니다.</div>;
  }
  return (
    <>
      <S.CountBox>
        {tensDigit(brand.conItems.length)}
        <span>개의 상품</span>
      </S.CountBox>
      <S.List>
        {brand.conItems.map(item => {
          const discountRate = parseInt(`${(item.originalPrice - item.minSellingPrice) * 0.01}`);
          const newItem = {
            href: `/item/${item.id}`,
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
    </>
  );
};
export default Brands;
