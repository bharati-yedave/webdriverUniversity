/// <reference types="cypress" />
describe("Network Testing", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/commands/network-requests");
  });
  it("Get Request", () => {
    cy.intercept(
      {
        method: "GET",
        url: "**/comments/*",
      },
      {
        body: {
          postId: 1,
          id: 1,
          name: " test name 123",
          email: "yedave@gmail.com",
          body: "Hello world",
        },
      }
    ).as("getComment");
    cy.get(".network-btn").click();
    cy.wait("@getComment").its("response.statusCode").should("eq", 200);
  });
});
