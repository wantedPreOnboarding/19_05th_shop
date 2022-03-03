import React, { useState, useEffect } from 'react';
import { AppLayout, TabMenu, Category } from 'components/common';
import CategoriesProps from 'components/categories/Categories.type';
import * as S from 'components/categories/Categories.styled';
import { GetServerSideProps } from 'next';
import { get } from 'apis/requestAPIs/categories';
import { MainCategory } from 'apis/models/Home.type';

const Categories = ({ data, name }: CategoriesProps) => {
  const [tab, setTab] = useState<MainCategory[]>([]);

  useEffect(() => {
    get
      .mainCategories()
      .then(res => setTab(res.conCategory1s))
      .catch(e => console.error(e));
  }, []);

  return (
    <AppLayout title={name}>
      <TabMenu menuData={tab} tabType="category" />
      <S.List>
        {data.map(item => (
          <Category page="brands" key={item.id} item={item} />
        ))}
      </S.List>
    </AppLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const { category1Id } = context.query;
  const data = typeof category1Id === 'string' ? await get.categories(category1Id) : null;
  return {
    props: {
      tab: data?.conCategory1,
      data: data?.conCategory1.conCategory2s,
      name: data?.conCategory1.name,
    },
  };
};

export default Categories;
