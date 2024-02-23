/// <reference types="Cypress"/>

describe("Test Contach Us form via WebdriverUniversity", () => {
  before(function () {
    cy.viewport(550, 750);
    cy.fixture("userDetails").as("user");
  });
  it("Should be able to submit a successful submission via contact us form", () => {
    //cypress code
    cy.visit("https://automationteststore.com/");
    cy.get(".info_links_footer").contains("Contact Us").click();
    cy.get("@user").then((user) => {
      cy.get("[name='first_name']").type(user.name);
      cy.get("[for='ContactUsFrm_email']").type(user.email);
      cy.get('[name="enquiry"]').type("this is the enquiry textbox ");
    });
    cy.get("[title='Submit']").click();
    cy.get(".contentpanel p").should(
      "have.text",
      "Your enquiry has been successfully sent to the store owner!"
    );
  });
});
