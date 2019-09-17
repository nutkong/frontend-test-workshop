describe('main spec', function() {
  it('render correctly', function() {
    cy.visit('/')
    cy.get('[data-testid=main-app]').should('have.text', 'React Application')
  })
})
