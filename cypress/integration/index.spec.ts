/// <reference types="cypress"/>

describe('렌딩페이지 테스트', () => {
  it('렌딩페이지 이동', () => {
    cy.visit('http://localhost:3000/');
  });

  it('렌딩페이지 마운팅 테스트', () => {
    // h1에 니콘내콘 타이틀을 포함합니다.
    cy.get('h1').contains('니콘내콘');

    // 9개의 카테고리를 확인합니다.
    cy.get('div[class*=MainCategoriesstyled__Wrapper]').children().should('have.length', 9);

    // 떙처리 섹션의 놓치지 마세요 문구를 확인합니다.
    cy.get('section[class*=DiscountItemstyled__MenuTitle] > span').contains('놓치지 마세요');

    // 떙처리 섹션의 상품이 8개 인지 확인합니다.
    cy.get('div[class*=DiscountItemstyled__Box]').children().should('have.length', 8);
  });
});
