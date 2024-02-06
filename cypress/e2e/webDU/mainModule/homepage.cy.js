///<reference types="cypress"/>

describe("Validating webDriveUniversity Home page", () => {
  beforeEach("", () => {
    cy.visit("https://webdriveruniversity.com/");
  });
  it("PageVisibility Validation", () => {
    let textss = [
      "The API Master Class & Testing in Detail using Postman!",
      "Cypress with Cucumber BDD - Beginner to Expert in 9 Hours!",
      "The Complete Cypress v12 Course: From Zero to Expert! [2024]",
      "The Complete WebdriverIO Course: From Zero to Expert! [2024]",
      "Selenium Webdriver 4 New Features In Detail",
      "2024 - Mastering Selectors/ Locators for Automation Testing!",
      "Selenium WebDriver 4, Cucumber BDD, Java & More! [NEW: 2024]",
      "Selenium Webdriver & Java - Using Real Examples - 2024",
    ];
    cy.get("#udemy-promo-thumbnail>h1").should(
      "have.text",
      "My Courses & Promo Codes"
    );
    textss.forEach(function (el, index, arr) {
      cy.log(el);
      cy.get("#udemy-promo-thumbnail").find("a").should("contain", el);
    });
  });
});
