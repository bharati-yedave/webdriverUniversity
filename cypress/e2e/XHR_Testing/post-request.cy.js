/// <reference types="cypress" />
describe("Network Testing", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/commands/network-requests");
  });
  it("Post Request", () => {
    cy.intercept("POST", "/comments").as("postComment");
    cy.get(".network-post").click();
    cy.wait("@postComment").should(({ request, response }) => {
      console.log(request);
      expect(request.body).to.include("email");
      expect(request.headers).to.have.property("content-type");
      console.log(response);
      expect(response.body).to.have.property(
        "name",
        "Using POST in cy.intercept()"
      );
      expect(response.headers).to.have.property("server");
    });
  });
});
