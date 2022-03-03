import React, { ReactNode } from 'react';
import { AppLayout, Spinner } from 'components/common';
import { YOUCON_MYCON } from 'consts/constants';
import { get } from 'apis/requestAPIs/home';
import { MainCategories, DiscountItem, BannerSlider } from 'components/index';
import useSWR from 'swr';

const Home = () => {
  const mainCategorie = useSWR('mainCategories', () => get.mainCategories());
  const discountItems = useSWR('discountItems', () => get.discountItems());

  const categories = mainCategorie.data && mainCategorie.data.conCategory1s;
  if (!mainCategorie.data) {
    return <Spinner />;
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
    return <Spinner />;
  }

  if (discountItems.error) {
    console.error(discountItems.error);
  }

  return (
    <>
      <BannerSlider />
      {categories && <MainCategories categories={categories} />}
      {disItems && <DiscountItem disItems={disItems} />}
    </>
  );
};

Home.getLayout = function getLayout(page: ReactNode) {
  return <AppLayout title={YOUCON_MYCON}>{page}</AppLayout>;
};

export default Home;
