import React, { ReactElement } from 'react';
import { CategoriesType } from './MainCategories.type';
import * as S from './MainCategories.styled';
import Link from 'next/link';
const MainCategories = (categories: CategoriesType) => {
  return (
    <S.Wrapper>
      {categories
        ? categories.categories.map(category => (
            <Link href={`/categories/${category.id}`} key={category.name}>
              <S.Box>
                <img src={category.imageUrl} />
                {category.name}
              </S.Box>
            </Link>
          ))
        : ''}
    </S.Wrapper>
  );
};

export default MainCategories;
