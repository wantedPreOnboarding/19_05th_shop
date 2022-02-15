import React from 'react';
import BrandsProps from './Brands.type';
import Brand from 'components/brands/Brand/Brand';
import { AppLayout } from 'components/common';
import { GetServerSideProps } from 'next';
import { get } from 'apis/requestAPIs/brands';
import * as S from './Brands.styled';


const Brands = ({ data, name }: BrandsProps) => {
  return (
    <AppLayout title={name} backPath="/">
      <S.List>
        {data.map(item => <Brand key={item.id} item={item} />)}
      </S.List>
    </AppLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { category1Id } = context.query;
  const data = typeof category1Id === 'string' ? await get.brands(category1Id) : null;

  return {
    props: {
      data: data?.conCategory1.conCategory2s,
      name: data?.conCategory1.name,
    }
  }
}

export default Brands;

