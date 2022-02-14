import type { NextPage } from 'next';
import Head from 'next/head';
import { AppLayout } from 'components';
import { YOUCON_MYCON } from 'consts/constants';
import { get } from 'apis/requestAPIs/home';

const Home: NextPage = () => {
  get.mainCategories().then(res => console.log(res.conCategory1s[0].name));

  return (
    <>
      <Head>
        <title>shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout title={YOUCON_MYCON}>
        <div>abc</div>
      </AppLayout>
    </>
  );
};
export default Home;
