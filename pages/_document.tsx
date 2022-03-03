import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta
            name="description"
            content="원티드X위코드 프론트엔드 프리온보딩 2기 취업하구19조 5번째 프로젝트입니다."
          ></meta>
          <meta
            name="og:description"
            content="원티드X위코드 프론트엔드 프리온보딩 2기 취업하구19조 5번째 프로젝트입니다."
          />
          <meta name="naver-site-verification" content="0d0b1952de4c95c8c2f3a016187ecfca40be3d52" />
        </Head>
        <body>
          <Main />
          <div id="modal-root" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
