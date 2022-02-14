import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/globalStyles';
import { theme } from 'styles/theme';
import { AppLayout } from 'components';
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>너와 나의 콘콘 [19조]</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AppLayout title="니콘내콘">
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
    </>
  );
};

export default App;
