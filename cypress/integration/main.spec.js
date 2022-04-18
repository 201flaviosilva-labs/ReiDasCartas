/// <reference types="cypress" />

describe("Main", () => {
	it("Open Card", () => {
		cy.visit('http://localhost:3000/');
		cy.get('.card:nth-child(1) path').click();
		cy.get('button:nth-child(1)').click();
	});
})
