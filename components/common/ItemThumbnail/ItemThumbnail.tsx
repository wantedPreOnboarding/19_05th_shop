import React, { ReactElement } from 'react';
import * as S from './ItemThumbnail.styled';
import Link from 'next/link';
import Image from 'next/image';
import { SCProps } from 'types/props';
import ItemThumbnailProps from './ItemThumbnail.type';
import DescThumbnail from './DescThumbnail/DescThumbnail';

const ItemThumbnail = ({
  href = '#',
  brand,
  itemName,
  imageUrl,
  discountRate,
  minSellingPrice,
  originalPrice,
  className,
}: SCProps<ItemThumbnailProps>): ReactElement => (
  <S.ItemThumbnail className={className}>
    <Link href={href}>
      <a className="presentation-a">
        <S.ItemThumbnailWrapper>
          <Image width="70" height="70" src={imageUrl} alt={itemName} />
        </S.ItemThumbnailWrapper>
        <DescThumbnail
          brand={brand}
          itemName={itemName}
          discountRate={discountRate}
          minSellingPrice={minSellingPrice}
          originalPrice={originalPrice}
        />
      </a>
    </Link>
  </S.ItemThumbnail>
);

export default React.memo(ItemThumbnail);
