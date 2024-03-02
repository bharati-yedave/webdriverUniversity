/// <reference types="cypress" />

describe("Verify checkboxes via webdriveruni", () => {
  beforeEach(function () {
    cy.navigateTo_WebdriverUni_Checkbox_Page();
  });
  it("Check and validate checkbox", () => {
    //cy.get('#checkboxes > :nth-child(1) > input').check()
    //cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')

    cy.get("#checkboxes > :nth-child(1) > input").as("option-1");
    //cy.get('@option-1').check();
    cy.get("@option-1").check().should("be.checked");
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#radio-buttons > [value="orange"]').check();
    cy.get('[value="green"]').check();
    cy.get('[value="blue"]').check();
    cy.get('[value="yellow"]').check();
    cy.get('[value="purple"]').check();
    cy.get("#fruit-selects").select("pear");
    /* ==== End Cypress Studio ==== */
  });

  it("Uncheck and validate checkbox", () => {
    cy.get(":nth-child(5) > input").as("option-3");
    cy.get("@option-3").uncheck().should("not.be.checked");
  });

  it("Check mutiple checkboxes", () => {
    cy.get("input[type='checkbox']")
      .check(["option-1", "option-2", "option-3", "option-4"])
      .should("be.checked");
  });
  it("Generate with cypress studio", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#dropdowm-menu-1').select('c#');
    cy.get('#checkboxes > :nth-child(1) > input').check();
    cy.get('[value="blue"]').check();
    cy.get('[value="lettuce"]').check();
    cy.get('#fruit-selects').select('pear');
    cy.get('.row').click();
    cy.get('.row').click();
    cy.get('#checkboxes > :nth-child(7)').should('be.visible');
    cy.get('#fruit-selects').should('be.enabled');
    /* ==== End Cypress Studio ==== */
  });
});
