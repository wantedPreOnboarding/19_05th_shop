import React from 'react';
import CategoryProps from './Category.type';
import * as S from './Category.styled';

const Category = ({ item }: CategoryProps) => {

  return (
    <>
      <S.Item>
        <S.ImgWrapper>
          <img src={item.imageUrl} alt={item.imageUrl} />
          <span>{item.name}</span>
        </S.ImgWrapper>
      </S.Item>
    </>
  );

};

export default Category;
