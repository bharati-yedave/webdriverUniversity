/// <reference types="cypress" />
describe("Scennario", () => {
  it("", () => {
    cy.request("GET", "dfg").then(() => {
      expect(response.status).to.eq(200);
    });
  });
  it("", () => {
    cy.request({
      method: "POST",
      url: "dfg",
      body: {
        name: "bharati",
      },
    }).then(() => {
      expect(response.status).to.eq(200);
    });
  });
});
