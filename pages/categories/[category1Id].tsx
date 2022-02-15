import React from 'react';
import { AppLayout } from 'components/common';
import Category from 'components/category/Category';
import CategoriesProps from './Categories.type';
import { GetServerSideProps } from 'next';
import { get } from 'apis/requestAPIs/categories';
import * as S from './Categories.styled';


const Categories = ({ data, name }: CategoriesProps) => {
  return (
    <AppLayout title={name} backPath="/">
      <S.List>
        {data.map(item => <Category key={item.id} item={item} />)}
      </S.List>
    </AppLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { category1Id } = context.query;
  const data = typeof category1Id === 'string' ? await get.categories(category1Id) : null;
  return {
    props: {
      data: data?.conCategory1.conCategory2s,
      name: data?.conCategory1.name,
    }
  }
}

export default Categories;
