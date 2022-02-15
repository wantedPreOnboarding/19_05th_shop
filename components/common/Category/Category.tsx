import React from 'react';
import { useRouter } from 'next/router';
import CategoryProps from './Category.type';
import * as S from './Category.styled';

const Category = ({ item }: CategoryProps) => {
  const router = useRouter();
  const pathName = router.pathname.split('/')[1];
  return (
    <S.Item
      onClick={() =>
        router.push(pathName === 'categories' ? `/brands/${item.id}` : `/categories/${item.id}`)
      }
    >
      <S.ImgWrapper>
        <img src={item.imageUrl} alt={item.imageUrl} />
        <span>{item.name}</span>
      </S.ImgWrapper>
    </S.Item>
  );
};

export default Category;
