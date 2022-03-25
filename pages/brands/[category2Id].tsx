import React from 'react';
import { AppLayout, Spinner } from 'components/common';
import Brands from 'components/brands';
import Error from 'pages/_error';
import useSWR from 'swr';
import { get } from 'apis/requestAPIs/categories';
import { useRouter } from 'next/router';

const BrandsPage = () => {
  const router = useRouter();
  const { category1Id, category2Id } = router.query;

  const { data: brandInfo, error } = useSWR(category1Id, (category1Id: string) =>
    get.categories(category1Id),
  );

  const brand =
    typeof category2Id === 'string'
      ? brandInfo?.conCategory1.conCategory2s.find(
          conCategory2 => +conCategory2.id === +category2Id,
        )
      : undefined;

  return (
    <AppLayout title={brand?.name}>
      {(() => {
        if (error) {
          return <Error statusCode={error.response.status} />;
        } else if (!brandInfo) {
          return <Spinner />;
        } else {
          return <Brands data={brand} />;
        }
      })()}
    </AppLayout>
  );
};

export default BrandsPage;
