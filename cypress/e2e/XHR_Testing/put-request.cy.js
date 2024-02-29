/// <reference types="cypress" />
describe("Network Testing", () => {
  var message = "Unable to connect";
  beforeEach(() => {
    cy.visit("https://example.cypress.io/commands/network-requests");
  });
  it("PUT Request", () => {
    cy.intercept(
      {
        method: "PUT",
        url: "**/comments/*",
      },
      {
        statusCode: 404,
        body: { error: message },
        delay: 500,
      }
    ).as("putComment");

    cy.get(".network-put").click();

    cy.wait("@putComment");

    cy.get(".network-put-comment").should("contain", message);
  });
});
