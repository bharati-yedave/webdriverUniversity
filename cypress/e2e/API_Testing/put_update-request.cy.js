/// <reference types="cypress" />

describe("PUT_update Request", () => {
  it("Update an existing post via the /posts api", () => {
    cy.request({
      method: "PUT",
      url: "http://localhost:3000/posts/2",
      body: {
        title: "Update using PUT method",
        author: "Bharati Yedave",
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
    });
  });
});
