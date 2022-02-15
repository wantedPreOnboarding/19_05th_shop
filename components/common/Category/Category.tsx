import React from 'react';
import Link from 'next/link'

import { useRouter } from 'next/router';
import CategoryProps from './Category.type';
import * as S from './Category.styled';

const Category = ({ item }: CategoryProps) => {
  const router = useRouter();
  const pathName = router.pathname.split('/')[1];
  return (
    <S.Item>
      <Link href={{
        pathname: `/brands/${item.id}`,
        query: { category1Id: item.conCategory1Id }
      }}>
        <S.ImgWrapper>
          <img src={item.imageUrl} alt={item.imageUrl} />
          <span>{item.name}</span>
        </S.ImgWrapper>
      </Link>
    </S.Item >
  );
};

export default Category;
