import React from 'react';
import BrandProps from './Brand.type';
import * as S from './Brand.styled';

const Brand = ({ item }: BrandProps) => {
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

export default Brand;
