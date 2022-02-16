describe('상품 구매 페이지 테스트', () => {
  it('마운팅 및 클릭 이벤트 테스트', () => {
    // root
    cy.visit('http://localhost:3000/');

    // categories
    cy.get('li[class*=Categorystyled__Item]').first().click();

    // brands
    cy.get('div[class*=Categorystyled__ImgWrapper]').first().click();

    // items
    cy.get('div[class*=ItemThumbnailstyled__ItemThumbnailWrapper]').first().click();

    //
    cy.get('button[class*=FullWidthButtonstyled__FullWidthButton]').contains('옵션 선택하기');
    cy.get('button[class*=FullWidthButtonstyled__FullWidthButton]').first().click();
    cy.get('button[class*=FullWidthButtonstyled__FullWidthButton]').contains('구매하기');
    cy.get('div[class*=OptionSelectorstyled__Option]').first().click();
    cy.get('div[class*=SelectedOptionViewerstyled__InnerWrapper]').first().click();
    cy.get('div[class*=BackDropstyled__BackDrop-sc]').first().click();
  });
});
