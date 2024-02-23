import Homepage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO.cy";
import Contact_Us_PO from "../../support/pageObjects/webdriver-uni/Contact_Us_PO.cy";
/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
  //Cypress.config('defaultCommandTimeout', 20000)
  const hp_PO = new Homepage_PO();
  const contactus_PO = new Contact_Us_PO();

  before(function () {
    cy.fixture("example").then(function (data) {
      //this.data = data;
      globalThis.data = data;
    });
  });

  beforeEach(function () {
    hp_PO.visitHomepage();
    cy.wait(3000);
    hp_PO.clickOn_ContactUs_Button();
    //cy.pause();
  });

  it("Should be able to submit a successful submission via contact us form", () => {
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");
    contactus_PO.ContactForm_Submission(
      Cypress.env("first_name"),
      data.last_name,
      data.email,
      "How can I learn Cypress?",
      "h1",
      "Thank You for your Message!"
    );
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
    contactus_PO.ContactForm_Submission(
      data.first_name,
      data.last_name,
      " ",
      "How can I learn Cypress?",
      "body",
      "Error: Invalid email address"
    );
  });
});
