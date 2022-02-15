describe('Navigation', () => {
  it('contact -> root -> categories -> brand -> items', () => {
    // root
    cy.visit('http://localhost:3000/');

    // contacts
    cy.get('img[class*=TitleBarstyled__TitleIcon').first().click();
    cy.get('a[href*=contacts]').first().click();
    cy.get('img[class*=TitleBarstyled__CancleBtn]').first().click();

    // categories
    cy.get('li[class*=Categorystyled__Item]').first().click();

    // brands
    cy.get('div[class*=Categorystyled__ImgWrapper]').first().click();

    // items
    cy.get('div[class*=ItemThumbnailstyled__ItemThumbnailWrapper]').first().click();
  });
});
