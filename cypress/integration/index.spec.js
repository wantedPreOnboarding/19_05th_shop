describe('index', () => {
  it('index 페이지 마운팅 테스트', () => {
    cy.visit('http://localhost:3000/');

    cy.get('h1').contains('니콘내콘');

    cy.get('div[class*=MainCategoriesstyled__Wrapper]').children().should('have.length', 9);

    cy.get('section[class*=DiscountItemstyled__MenuTitle] > span').contains('놓치지 마세요');

    cy.get('div[class*=DiscountItemstyled__Box]').children().should('have.length', 8);
  });
});
