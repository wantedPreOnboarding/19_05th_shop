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

  const disItems =
    discountItems.data &&
    discountItems.data.conItems.map(conItem => ({
      href: `item/${conItem.id}`,
      itemName: conItem.name,
      imageUrl: conItem.imageUrl,
      brand: conItem.conCategory2.name,
      discountRate: conItem.discountRate,
      originalPrice: conItem.originalPrice,
      minSellingPrice: conItem.minSellingPrice,
    }));

  if (discountItems.error) {
    console.error(discountItems.error);
  }

  if (mainCategorie.error) {
    console.error(mainCategorie.error);
  }

  return (
    <>
      {mainCategorie && disItems ? (
        <>
          <BannerSlider />
          {categories && <MainCategories categories={categories} />}
          {disItems && <DiscountItem disItems={disItems} />}
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

Home.getLayout = function getLayout(page: ReactNode) {
  return <AppLayout title={YOUCON_MYCON}>{page}</AppLayout>;
};

export default Home;
