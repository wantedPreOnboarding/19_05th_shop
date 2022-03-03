import React from 'react';
import { AppLayout, TabMenu, Category } from 'components/common';
import * as S from 'components/categories/Categories.styled';
import { useRouter } from 'next/router';
import { get } from 'apis/requestAPIs/categories';
import useSWR from 'swr';
import CategoriesProps from 'components/categories/Categories.type';
import { GetStaticProps } from 'next';
import Error from 'pages/_error';

const Categories = ({ tabInfo }: CategoriesProps) => {
  const router = useRouter();
  const { category1Id } = router.query;

  const { data: categoryInfo, error } = useSWR(category1Id, (category1Id: string) =>
    get.categories(category1Id),
  );

  return (
    <AppLayout title={categoryInfo?.conCategory1.name}>
      {categoryInfo ? (
        <>
          <TabMenu menuData={tabInfo} tabType="category" />
          <S.List>
            {/* categoryInfo?.conCategory1.conCategory2s 브랜드 목록 */}
            {categoryInfo?.conCategory1.conCategory2s.map(item => (
              <Category page="brands" key={item.id} item={item} />
            ))}
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
