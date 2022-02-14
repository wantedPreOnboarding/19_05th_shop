import React, { ReactElement } from 'react';
import * as S from './ItemThumbnail.styled';
import Link from 'next/link';
import Image from 'next/image';
import { SCProps } from 'types/props';
import ItemThumbnailProps from './ItemThumbnail.type';
import DescThumbnail from './DescThumbnail/DescThumbnail';

const ItemThumbnail = ({
  href,
  brand,
  ItemName,
  discountRate,
  minSellingPrice,
  originalPrice,
  className,
}: SCProps<ItemThumbnailProps>): ReactElement => (
  <S.ItemThumbnail className={className}>
    <Link href={href}>
      <>
        <S.ItemThumbnailWrapper>
          <Image width="70" height="70" src="/vercel.svg" />
        </S.ItemThumbnailWrapper>
        <DescThumbnail
          brand={brand}
          ItemName={ItemName}
          discountRate={discountRate}
          minSellingPrice={minSellingPrice}
          originalPrice={originalPrice}
        />
      </>
    </Link>
  </S.ItemThumbnail>
);

ItemThumbnail.defaultProps = {
  href: '#',
};

export default ItemThumbnail;
