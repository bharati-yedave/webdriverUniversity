/// <reference types="cypress" />

describe("DELETE Request", () => {
  it("Delete post via the /posts api", () => {
    cy.request({
      method: "DELETE",
      url: "http://localhost:3000/posts/7023",
    }).then((response) => {
      expect(response.status).to.eql(200);
    });
  });
});

//to delete particular post we have to mentioned unique id of that post
