import React, { ReactElement } from 'react';
import * as S from './DescThumbnail.styled';
import { SCProps } from 'types/props';
import ItemThumbnailProps from '../ItemThumbnail.type';
import { commaNumber } from 'uilts';

const DescThunbnail = ({
  brand,
  ItemName,
  discountRate,
  minSellingPrice,
  originalPrice,
  className,
}: SCProps<Omit<ItemThumbnailProps, 'href'>>): ReactElement => (
  <S.DescThumbnail className={className}>
    {brand && <div className="brand">{brand}</div>}
    <div className="item-name">{ItemName}</div>
    <div>
      <span className="discount-rate">{discountRate}%</span>
      <span className="min-price"> {commaNumber(minSellingPrice)}원</span>
      <span className="org-price">{commaNumber(originalPrice)}원</span>
    </div>
  </S.DescThumbnail>
);
export default DescThunbnail;
