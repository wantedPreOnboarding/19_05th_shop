import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      deepBlack: '#000';
      black: '#333';
      white: '#FFFFFF';
      red: 'red';
      ligthGray: '#f1f3f4';
      gray: '#808080';
      discountGray: '#999';
      borderGray: '#ccc';
      borderRed: '#f75656';
      backgroundOutsideGray: '#E5E5E5';
      backgroundInsideGray: '#F1F3F4';
      sideMenuRed: '#ff5757';
    };
    fontSize: {
      xl: '16px'; //상품명, 가격, 고객센터 상담시간 안내 타이틀
      l: '15px'; //타이틀, 고객상담글 내용
      m: '14px'; //할인 가격, 고객센터 소제목, 환불규정 제목
      s: '13px';
      xs: '12px'; //카테고리 메뉴, 환불규정 및 유의사항 내용
    };
    fontWeight: {
      strong: 600;
      semiStrong: 500;
      normal: 'normal';
    };

    breakpoints: {
      mobile: '@media screen and (min-width: 480px)';
    };
  }
}
