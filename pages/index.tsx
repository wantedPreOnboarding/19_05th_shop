import React from 'react';
import type { NextPage } from 'next';
import { AppLayout } from 'components/common';
import { YOUCON_MYCON } from 'consts/constants';
import { get } from 'apis/requestAPIs/home';
import { MainCategories, DiscountItem, BannerSlider } from 'components/index';
import useSWR from 'swr';

const Home: NextPage = () => {
  const mainCategorie = useSWR('mainCategories', () => get.mainCategories());
  const discountItems = useSWR('discountItems', () => get.discountItems());

  const categories = mainCategorie.data && mainCategorie.data.conCategory1s;
  if (!mainCategorie.data) {
    return <div>loadding</div>;
  }
  if (mainCategorie.error) {
    console.error(mainCategorie.error);
  }

  const disItems =
    discountItems.data &&
    discountItems.data.conItems.map(conItem => ({
      href: `items/${conItem.id}`,
      itemName: conItem.name,
      imageUrl: conItem.imageUrl,
      brand: conItem.conCategory2.name,
      discountRate: conItem.discountRate,
      originalPrice: conItem.originalPrice,
      minSellingPrice: conItem.minSellingPrice,
    }));

  if (!disItems) {
    return <div>loadding</div>;
  }

  if (discountItems.error) {
    console.error(discountItems.error);
  }

  return (
    <AppLayout title={YOUCON_MYCON}>
      <BannerSlider />
      {categories && <MainCategories categories={categories} />}
      {disItems && <DiscountItem disItems={disItems} />}
    </AppLayout>
  );
};
export default Home;
