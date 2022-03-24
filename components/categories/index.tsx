import React, { ReactElement } from 'react';
import { Category, ItemThumbnail, TabMenu } from 'components/common';
import * as S from './index.styled';
import { ContItems } from 'apis/models/Categories.type';
import CategoriesProps from './index.type';

const Categories = ({ data: { tabInfo, categoryInfo } }: CategoriesProps): ReactElement => {
  const getDisCountItem = (name: string, innerItem: ContItems) => ({
    brand: name,
    href: `/items/${innerItem.id}`,
    imageUrl: innerItem.imageUrl,
    itemName: innerItem.name,
    discountRate: innerItem.discountRate,
    minSellingPrice: innerItem?.minSellingPrice,
    originalPrice: innerItem.originalPrice,
  });

  return (
    <>
      <TabMenu menuData={tabInfo} tabType="category" />
      {categoryInfo.conCategory1.name === '땡철이' ? (
        // categoryInfo?.conCategory1.conCategory2s 브랜드 목록
        categoryInfo.conCategory1.conCategory2s.map(brand =>
          brand.conItems?.map(conItem => {
            const discountItem = getDisCountItem(brand.name, conItem);
            return (
              <S.Box key={discountItem.itemName}>
                <ItemThumbnail {...discountItem} />
              </S.Box>
            );
          }),
        )
      ) : (
        <S.List>
          {categoryInfo.conCategory1.conCategory2s.map(item => (
            <Category page="brands" key={item.id} item={item} />
          ))}
        </S.List>
      )}
    </>
  );
};
export default Categories;
