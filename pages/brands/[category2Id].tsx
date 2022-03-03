import React from 'react';
import { AppLayout, ItemThumbnail } from 'components/common';
import { tensDigit } from 'utils';
import { get } from 'apis/requestAPIs/categories';
import * as S from 'components/brands/Brand.styled';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import Error from 'pages/_error';

const Brands = () => {
  const router = useRouter();
  const { category1Id, category2Id } = router.query;

  const { data, error } = useSWR(category1Id, (category1Id: string) => get.categories(category1Id));

  const brand =
    typeof category2Id === 'string'
      ? data?.conCategory1.conCategory2s.find(conCategory2 => +conCategory2.id === +category2Id)
      : undefined;

  return (
    <AppLayout title={brand?.name}>
      {brand?.conItems ? (
        <>
          <S.CountBox>
            {tensDigit(brand.conItems.length)}
            <span>개의 상품</span>
          </S.CountBox>
          <S.List>
            {brand.conItems.map(item => {
              const discountRate = parseInt(
                `${(item.originalPrice - item.minSellingPrice) * 0.01}`,
              );
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
        </>
      ) : error ? (
        <Error statusCode={404} />
      ) : (
        <div>loading</div>
      )}
    </AppLayout>
  );
};

export default Brands;
