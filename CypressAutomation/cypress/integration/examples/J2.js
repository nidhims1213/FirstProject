//test case is called as spec file

/// <reference types="Cypress" />

describe('j2 test suite', function()
{
  it('Login for Multientity', function()
  {
      cy.visit("https://multientity.stage-1.sensehq.co/signin?")
      cy.wait(2000)
      cy.get('[data-it-email="true"]').type('nidhi@sensehq.com')
      cy.get('[data-it-password="true"]').type('Nidhu@1213')
      cy.get('.auth__button___yhEo4').click()
      cy.wait(2000)
    })

})
