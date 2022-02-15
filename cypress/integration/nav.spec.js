describe('Navigation', () => {
  it('root -> categories -> brand -> items -> contact', () => {
    // root
    cy.visit('http://localhost:3000/');

    // contacts
    cy.get('img[class*=TitleBarstyled__TitleIcon').first().click();
    cy.get('a[href*=contacts]').first().click();
    cy.get('img[class*=TitleBarstyled__CancleBtn]').first().click();

    // categories
    cy.get('li[class*=Categorystyled__Item]').first().click();

    // brands
    cy.get('li[class*=Categorystyled__Item]').first().click();

    // items
    cy.get('li[class*=ItemThumbnailstyled__ItemThumbnail]').first().click();

    // contacts
    cy.get('li[class*=Categorystyled__Item]').first().click();
  });
  //   // The new url should include "/about"
  //   cy.url().should('include', '/about');

  //   // The new page should contain an h1 with "About page"
  //   cy.get('h1').contains('About Page');
  // });
});
