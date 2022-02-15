import React, { ReactElement } from 'react';
import { CategoriesType } from './MainCategories.type';
import * as S from './MainCategories.styled';
import Category from 'components/common/Category/Category';

const MainCategories = (categories: CategoriesType) => {
  return (
    <S.Wrapper>
      {categories
        ? categories.categories.map(category => <Category page='categories' item={category} key={category.id} />)
        : ''}
    </S.Wrapper>
  );
};

export default MainCategories;
