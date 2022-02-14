import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      red: string;
      discountGray: string;
      borderGray: string;
      borderRed: string;
      backgroundOutsideGray: string;
      backgroundInsideGray: string;
      sideMenuRed: string;
    };
    fontSize: {
      xl: string; //상품명, 가격, 고객센터 상담시간 안내 타이틀
      l: string; //타이틀, 고객상담글 내용
      m: string; //할인 가격, 고객센터 소제목, 환불규정 제목
      s: string;
      xs: string; //카테고리 메뉴, 환불규정 및 유의사항 내용
    };
    fontWeight: {
      strong: number;
      semiStrong: number;
      normal: string;
    };
  }
}
