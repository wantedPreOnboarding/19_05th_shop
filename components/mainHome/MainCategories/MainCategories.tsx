import React, { ReactElement } from 'react';
import { CategoriesType } from './MainCategories.type';
import * as S from './MainCategories.styled';
const MainCategories = (categories: CategoriesType) => {
  return (
    <S.Wrapper>
      {categories
        ? categories.categories.map(category => (
            <S.Box key={category.name}>
              <img src={category.imageUrl} />
              {category.name}
            </S.Box>
          ))
        : ''}
    </S.Wrapper>
  );
};

export default MainCategories;
