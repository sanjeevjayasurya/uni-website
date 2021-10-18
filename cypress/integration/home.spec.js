// home.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe("Visit website", () => {
  it("opens website", () => {
    cy.visit("http://localhost:4000");

	cy.contains('Apply Now').click()

	cy.url().should('include', '/apply')

	cy.get('[data-testid=logo]').click()
	cy.url().should('include', '/')
  });

  it("opens privacy policy", () => {
    cy.visit("http://localhost:4000");

	cy.contains('Privacy Policy').click()

	cy.url().should('include', '/privacy-policy')

	cy.get('[data-testid=logo]').click()
	cy.url().should('include', '/')
  });
});
