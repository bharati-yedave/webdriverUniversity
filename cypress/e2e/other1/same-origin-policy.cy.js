/// <reference types='cypress' />
describe("Cypress Web Security", () => {
  //this will not work it will throgh error  |(after setting the chromewebsecurity: false it work)
  it("Validating Two different domain", () => {
    cy.visit("https://www.webdriveruniversity.com/");
    cy.visit("https://www.google.com/");
  });
  //this will work
  it("Validating Same superdomain with their subdomain", () => {
    cy.visit("https://www.webdriveruniversity.com");
    cy.get("#automation-test-store").invoke("removeAttr", "target").click();
  });
  it.only("origin comand ", () => {
    cy.origin("automationteststore.com", () => {
      cy.visit("/");
    });
    cy.origin("automationteststore.com", () => {
      cy.visit("/");
    });
  });
});
