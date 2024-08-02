describe('Cypress mor examples', () => {
  beforeEach(() => {
    cy.visit('/examples')
  })
  it('should conatins', () => {
    cy.contains(/Examples/i)
  });
  it('multi-page testing Pathname', () => {
    cy.getDataTest('nav-why-cypress').click()
    cy.location('pathname').should('equal', '/')

    cy.getDataTest('nav-overview').click()
    cy.location('pathname').should('equal', '/overview')

    cy.getDataTest('nav-fundamentals').click()
    cy.location('pathname').should('equal', '/fundamentals')

    cy.getDataTest('nav-forms').click()
    cy.location('pathname').should('equal', '/forms')
    
    // cy.getDataTest('nav-examples').click()
    // cy.location('pathname').should('equal', '/examples')

    cy.getDataTest('nav-componet').click()
    cy.location('pathname').should('equal', '/component')

    cy.getDataTest('nav-best-practices').click()
    cy.location('pathname').should('equal', '/best-practices')
  });
  it('should intercepts', () => {
    cy.intercept('POST', 'http://localhost:3000/examples', {
      body:{
        message: '✨ successflly intercept'
      }
    })
  });
})