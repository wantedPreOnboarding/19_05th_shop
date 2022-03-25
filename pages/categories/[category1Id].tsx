import React from 'react';
import Categories from 'components/categories';
import { AppLayout, Spinner } from 'components/common';
import Error from 'pages/_error';
import { get } from 'apis/requestAPIs/categories';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { ContItems } from 'apis/models/Categories.type';

interface CategoriesPageProps {
  tabInfo: ContItems[];
}

const CategoriesPage = ({ tabInfo }: CategoriesPageProps) => {
  const router = useRouter();
  const { category1Id } = router.query;

  const { data: categoryInfo, error } = useSWR(category1Id, (category1Id: string) =>
    get.categories(category1Id),
  );

  return (
    <AppLayout title={categoryInfo?.conCategory1.name}>
      {(() => {
        if (error) {
          return <Error statusCode={error.response.status} />;
        } else if (!categoryInfo) {
          return <Spinner />;
        } else {
          return <Categories data={{ categoryInfo, tabInfo }} />;
        }
      })()}
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

export default CategoriesPage;
