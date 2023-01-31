/// <reference types="cypress" />

describe('Test width 1440px', () => {
  beforeEach(() => {
      cy.viewport(1440, 1800);
      cy.visit('http://localhost:3000');
  });

  it('test layout burger-menu', () => {
      cy.get('[data-test-id=button-burger]').should('not.be.visible');
      cy.get('[data-test-id=app]').screenshot('app');
  });

  it('test slider', () => {
      cy.get('[data-test-id=card]').first().should('be.exist').click();
      cy.get('[data-test-id=app]').screenshot('slider not foto 1440px');
      cy.visit('http://localhost:3000');
      cy.get('[data-test-id=card]').eq(1).should('be.exist').click();
      cy.get('[data-test-id=app]').screenshot('slider one foto 1440px');
      cy.visit('http://localhost:3000');
      cy.get('[data-test-id=card]').eq(2).should('be.exist').click();
      cy.get('[data-test-id=app]').screenshot('slider more two foto 1440px');
      cy.get('[data-test-id=slide-big]').screenshot('slider before 1440px');
      cy.get('[data-test-id=slide-mini]').get('.swiper-slide-visible').eq(1).should('be.exist').click();
      cy.get('[data-test-id=slide-big]').screenshot('slider after 1440px');
  });

  it('test button comment view', () => {
      cy.get('[data-test-id=card]').first().click();
      cy.get('[data-test-id=button-hide-reviews]').should('be.exist').click();
      cy.get('[data-test-id=app]').screenshot('book-page comment collapse');
      cy.get('[data-test-id=button-hide-reviews]').click();
      cy.get('[data-test-id=app]').screenshot('book-page comment expand');
  });

  it('test navigation view', () => {
      cy.get('[data-test-id=navigation-showcase]').should('be.exist').click();
      cy.get('[data-test-id=navigation-books]').should('not.be.visible');
      cy.get('[data-test-id=navigation-showcase]').click();
      cy.get('[data-test-id=navigation-books]').should('be.visible').should('be.exist');
      cy.get('[data-test-id=navigation-terms]').should('be.exist').click();
      cy.get('[data-test-id=navigation-books]').should('not.be.visible');
  });
});

describe('Test width 768px', () => {
  beforeEach(() => {
      cy.viewport(768, 1800);
      cy.visit('http://localhost:3000');
  });

  it('test layout burger-menu', () => {
      cy.get('[data-test-id=button-burger]').should('be.visible');
      cy.get('[data-test-id=app]').screenshot('app 768px');
      cy.get('[data-test-id=button-burger]').should('be.exist').click();
      cy.get('[data-test-id=app]').screenshot('app burger-menu open 768px');
      cy.get('[data-test-id=button-burger]').click();
      cy.get('[data-test-id=app]').screenshot('app burger-menu close 768px');
      cy.get('[data-test-id=button-burger]').click();
      cy.get('[data-test-id=app]').click(310, 20, { force: true });
      cy.get('[data-test-id=app]').screenshot('app burger-menu close click not burger-menu 768px');
  });

  it('test slider', () => {
      cy.get('[data-test-id=card]').first().click()
      cy.get('[data-test-id=app]').screenshot('slider not foto 768px');
      cy.visit('http://localhost:3000');
      cy.get('[data-test-id=card]').eq(1).click()
      cy.get('[data-test-id=app]').screenshot('slider one foto 768px');
      cy.visit('http://localhost:3000');
      cy.get('[data-test-id=card]').eq(2).click()
      cy.get('[data-test-id=app]').screenshot('slider more two foto 768px');
      cy.get('[data-test-id=slide-big]').screenshot('slider before 768px');
      cy.get('.swiper-pagination-bullet').eq(1).should('be.exist').click();
      cy.get('[data-test-id=slide-big]').screenshot('slider after 768px');
  });

  it('test navigation view', () => {
      cy.get('[data-test-id=button-burger]').click();
      cy.get('[data-test-id=burger-showcase]').should('be.exist').click();
      cy.get('[data-test-id=burger-books]').should('not.be.visible');
      cy.get('[data-test-id=burger-showcase]').click();
      cy.get('[data-test-id=burger-books]').should('be.visible').should('be.exist');
      cy.get('[data-test-id=burger-terms]').should('be.exist').click();
      cy.get('[data-test-id=burger-books]').should('not.be.visible');
  });

});

describe('Test width 320px', () => {
  beforeEach(() => {
      cy.viewport(320, 1800);
      cy.visit('http://localhost:3000');
  });

  it('test layout burger-menu', () => {
      cy.get('[data-test-id=button-burger]').should('be.visible');
      cy.get('[data-test-id=app]').screenshot('app 320px');
      cy.get('[data-test-id=button-burger]').click();
      cy.get('[data-test-id=app]').screenshot('app burger-menu open 320px');
      cy.get('[data-test-id=button-burger]').click();
      cy.get('[data-test-id=app]').screenshot('app burger-menu close 320px');
      cy.get('[data-test-id=button-burger]').click();
      cy.get('[data-test-id=app]').click(310, 20, { force: true });
      cy.get('[data-test-id=app]').screenshot('app burger-menu close click not burger-menu 320px');
  });

  it('test slider', () => {
      cy.get('[data-test-id=card]').first().click()
      cy.get('[data-test-id=app]').screenshot('slider not foto 320px');
      cy.get('[data-test-id=breadcrumbs-link]').click();
      cy.get('[data-test-id=card]').eq(1).click()
      cy.get('[data-test-id=app]').screenshot('slider one foto 320px');
      cy.get('[data-test-id=breadcrumbs-link]').click();
      cy.get('[data-test-id=card]').eq(2).click()
      cy.get('[data-test-id=app]').screenshot('slider more two foto 320px');
      cy.get('[data-test-id=app]').screenshot('slider more two foto 320px');
      cy.get('[data-test-id=slide-big]').screenshot('slider before 320px');
      cy.get('.swiper-pagination-bullet').eq(1).click();
      cy.get('[data-test-id=slide-big]').screenshot('slider after 320px');
  });

  it('test search', () => {
      cy.get('[data-test-id=input-search]').should('not.be.visible');
      cy.get('[data-test-id=button-search-open]').should('be.exist').click()
      cy.get('[data-test-id=input-search]').should('be.visible');
      cy.get('[data-test-id=button-search-close]').should('be.exist').click()
      cy.get('[data-test-id=input-search]').should('not.be.visible');
  });
});
