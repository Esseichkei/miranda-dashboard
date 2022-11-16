describe('Authentication', () => {
  it('Logs In', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[name="user"]').type('cat');
    cy.get('[name="password"]').type('meow');
    cy.contains('Log in').click();
    cy.get('h1').should('contain', 'Dashboard!');
    cy.contains('Log out').click();
    cy.get('h1').should('contain', 'Login!');
  })
  it('Fails To Log In', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[name="user"]').type('fuck');
    cy.get('[name="password"]').type('you');
    cy.contains('Log in').click();
    cy.get('h1').should('contain', 'Login!');
  })
})