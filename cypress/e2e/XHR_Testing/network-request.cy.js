/// <reference types="cypress" />
describe("Network Testing with get,post,put http methods", () => {
  let message = "Unable to connect";
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

  //=====================================================================

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

  //==================================================================

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
