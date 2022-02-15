import React from 'react';
import { AppLayout } from 'components/common';
import { GetServerSideProps } from 'next';
import { get } from 'apis/requestAPIs/categories';
import BrandsProps from './brands.type';
import { useRouter } from 'next/router';

const Brands = ({ id }: BrandsProps) => {
  return (
    <AppLayout title="test" backPath="/">
    </AppLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // const { category2Id } = context.query;
  // const data = typeof category2Id === 'string' ? await get.categories(category2Id) : null;

  return {
    props: {
      // id: category2Id,
    }
  }
}
export default Brands;

