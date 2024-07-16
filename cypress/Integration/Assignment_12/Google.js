describe('Google title check', () => {
  it('Test title', () => {
      cy.visit("https://www.google.com/");
      cy.title().should('eq','Google');
  });
});