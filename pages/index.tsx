import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { AppLayout } from 'components/common';
import { YOUCON_MYCON } from 'consts/constants';
import { get } from 'apis/requestAPIs/home';
import { MainCategory } from 'apis/models/Home.type';
import { DiscountCon } from 'components/index/index.type';
import { MainCategories, DiscountItem, BannerSlider } from 'components/index';

const Home: NextPage = () => {
  const [categories, setCategories] = useState<MainCategory[]>();
  const [disItems, setDisItems] = useState<DiscountCon[]>([]);
  useEffect(() => {
    get
      .mainCategories()
      .then(res => setCategories(res.conCategory1s))
      .catch(e => console.error(e));
    get
      .discountItems()
      .then(res =>
        setDisItems(
          res.conItems.map(conItem => ({
            href: `items/${conItem.id}`,
            itemName: conItem.name,
            imageUrl: conItem.imageUrl,
            brand: conItem.conCategory2.name,
            discountRate: conItem.discountRate,
            originalPrice: conItem.originalPrice,
            minSellingPrice: conItem.minSellingPrice,
          })),
        ),
      )
      .catch(e => console.error(e));
  }, []);

  return (
    <>
      <Head>
        <title>shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout title={YOUCON_MYCON}>
        <BannerSlider />
        {categories && <MainCategories categories={categories} />}
        {disItems && <DiscountItem disItems={disItems} />}
      </AppLayout>
    </>
  );
};
export default Home;
