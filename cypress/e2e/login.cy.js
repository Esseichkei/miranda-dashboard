describe('Authentication', () => {
  beforeEach(() => {
    cy.visit('/')
  });
  it('Logs In', () => {
    cy.url().should('include', '/login');
    cy.get('[name="user"]').type('cat');
    cy.get('[name="password"]').type('meow');
    cy.contains('Log in').click();
    cy.url().should('include', '/');
    cy.contains('Log out').click();
    cy.url().should('include', '/login');
  })
  it('Fails To Log In', () => {
    cy.get('[name="user"]').type('fuck');
    cy.get('[name="password"]').type('you');
    cy.contains('Log in').click();
    cy.url().should('include', '/login');
  })
})