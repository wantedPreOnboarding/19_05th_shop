/// <reference types="cypress"/>

describe('Navigation', () => {
  it('유효한 모든 페이지를 접근합니다.', () => {
    // root -> contacts -> categories -> brands -> items

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
    cy.get('li[class*=Categorystyled__Item]').first().click();
  });
});
