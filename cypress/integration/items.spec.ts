/// <reference types="cypress"/>

describe('상품 구매 페이지 테스트', () => {
  it('상품 구매 페이지로 이동', () => {
    // root
    cy.visit('http://localhost:3000/');

    // categories
    cy.get('li[class*=Categorystyled__Item]').first().click();

    // brands
    cy.get('div[class*=Categorystyled__ImgWrapper]').first().click();

    // items
    cy.get('div[class*=ItemThumbnailstyled__ItemThumbnailWrapper]').first().click();
  });

  it('옵션 선택 및 구매 하기 테스트', () => {
    cy.get('button[class*=FullWidthButtonstyled__FullWidthButton]').contains('옵션 선택하기');
    cy.get('button[class*=FullWidthButtonstyled__FullWidthButton]').first().click();
    cy.get('button[class*=FullWidthButtonstyled__FullWidthButton]').contains('구매하기');
    cy.get('div[class*=OptionSelectorstyled__Option]').first().click();
    cy.get('div[class*=SelectedOptionViewerstyled__InnerWrapper]').first().click();
  });

  // 백드롭 클릭시 옵션 선택 창 닫기 테스트 필요
});
