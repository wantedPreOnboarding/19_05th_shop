/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import React from 'react';
import Link from 'next/link';
import CategoryProps from './Category.type';
import * as S from './Category.styled';

const Category = ({ item, page }: CategoryProps) => {
  return (
    <S.Item>
      <Link
        href={{
          pathname: `/${page}/${item.id}`,
          query: { category1Id: item.conCategory1Id },
        }}
      >
        <S.ImgWrapper>
          <img src={item.imageUrl} alt={item.imageUrl} />
          <span>{item.name}</span>
        </S.ImgWrapper>
      </Link>
    </S.Item>
  );
};

export default Category;
