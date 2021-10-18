
describe("fill beta form but not apply ", () => {
  it("fill form", () => {
    cy.visit("http://localhost:4000");

	cy.contains('Apply Now').click()

	cy.url().should('include', '/apply')

	cy.get('[data-testid=custName]').type("uni customer", {force: true});
	cy.get('[data-testid=phNo]').type("9876543210", {force: true});
	cy.get('[data-testid=emailId]').type("uni.customer@mail.com", {force: true});
	cy.get('[data-testid=pan]').type("ABCD123", {force: true});

  });

});
