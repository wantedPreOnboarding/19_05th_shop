import { NextComponentType } from 'next';
import type { AppContext, AppInitialProps, AppLayoutProps } from 'next/app';
import Head from 'next/head';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/globalStyles';
import { theme } from 'styles/theme';

const App: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>너와 나의 콘콘 [19조]</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
    </>
  );
};

export default App;
