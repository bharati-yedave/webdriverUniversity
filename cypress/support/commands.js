// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands

// ***********************************************
require("@4tw/cypress-drag-drop");
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
Cypress.Commands.add("navigatTo_WebdriverUni_Homepage", (productname) => {
  cy.visit("/");
});
Cypress.Commands.add("navigateTo_WebdriverUni_Checkbox_Page", (productname) => {
  cy.visit("/" + "/Dropdown-Checkboxes-RadioButtons/index.html");
});
Cypress.Commands.add("selectProduct", (productname) => {
  cy.get(".fixed_wrapper .prdocutname").each((ele, index, list) => {
    if (ele.text().includes(productname)) {
      cy.wrap(ele).click();
    }
  });
});
Cypress.Commands.add("addProductToBasket", (productName) => {
  cy.get(".fixed_wrapper .prdocutname").each((ele, index, list) => {
    if (ele.text() === productName) {
      cy.log(ele.text());
      cy.get(".productcart").eq(index).click();
    }
  });
});
Cypress.Commands.add(
  "webdriverUni_ContactForm_Submission",
  (fname, lname, emailid, comment, $selector, message) => {
    cy.get("[name='first_name']").type(fname);
    cy.get("[name='last_name']").type(lname);
    cy.get("[name='email']").type(emailid);
    cy.get("[name='message']").type(comment);
    cy.get('[type="submit"]').click();
    cy.get($selector).contains(message);
  }
);
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
