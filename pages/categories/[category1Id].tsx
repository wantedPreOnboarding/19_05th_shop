import React from 'react';
import { AppLayout, TabMenu, Category, Spinner } from 'components/common';
import * as S from 'components/categories/Categories.styled';
import { useRouter } from 'next/router';
import { get } from 'apis/requestAPIs/categories';
import useSWR from 'swr';
import CategoriesProps from 'components/categories/Categories.type';
import { GetStaticProps } from 'next';
import Error from 'pages/_error';
import { ItemThumbnail } from 'components/common';
import { ContItems } from 'apis/models/Categories.type';

const Categories = ({ tabInfo }: CategoriesProps) => {
  const router = useRouter();
  const { category1Id } = router.query;

  const { data: categoryInfo, error } = useSWR(category1Id, (category1Id: string) =>
    get.categories(category1Id),
  );

  const getDisCountItem = (name: string, innerItem: ContItems) => ({
    brand: name,
    href: `/items/${innerItem.id}`,
    imageUrl: innerItem.imageUrl,
    itemName: innerItem.name,
    discountRate: innerItem.discountRate,
    minSellingPrice: innerItem?.minSellingPrice,
    originalPrice: innerItem.originalPrice,
  });

  return (
    <AppLayout title={categoryInfo?.conCategory1.name}>
      {categoryInfo ? (
        <>
          <TabMenu menuData={tabInfo} tabType="category" />
          {categoryInfo.conCategory1.name === '땡철이' ? (
            // categoryInfo?.conCategory1.conCategory2s 브랜드 목록
            categoryInfo.conCategory1.conCategory2s.map(brand =>
              brand.conItems?.map(conItem => {
                const discountItem = getDisCountItem(brand.name, conItem);
                return (
                  <S.Box key={discountItem.itemName}>
                    <ItemThumbnail {...discountItem} />
                  </S.Box>
                );
              }),
            )
          ) : (
            <S.List>
              {categoryInfo.conCategory1.conCategory2s.map(item => (
                <Category page="brands" key={item.id} item={item} />
              ))}
            </S.List>
          )}
        </>
      ) : error ? (
        <Error statusCode={404} />
      ) : (
        <Spinner />
      )}
    </AppLayout>
  );
};

// CSR과 SSG를 섞어서 사용해서 클라이언트의 부담을 덜어낼 수 있다.
// 단 SSG에서 호출하는 API가 dynamic 하지 않은데, 페이지 자체가 dynamic 이라면 statcPath를 반드시 사용하는 구조가 되어서
// 모든 페이지를 만들지만 그 페이지는 실질적으로 다 같은 파일이 되어버린다.
// 따라서 서버에 필요 이상으로 CPU를 점유하게 될 수 있으며
// 이를 방지하기 위해서는 SSG에서 호출하는 API가 dynamic 하거나 페이지 자체가 단일 페이지어야 한다.

export const getStaticProps: GetStaticProps = async () => {
  const data = await get.mainCategories();

  return {
    props: {
      tabInfo: data.conCategory1s,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await get.mainCategories();

  const params = data.conCategory1s.map(item => ({
    params: {
      category1Id: item + '',
    },
  }));

  return {
    paths: params,
    fallback: true,
  };
};

export default Categories;
