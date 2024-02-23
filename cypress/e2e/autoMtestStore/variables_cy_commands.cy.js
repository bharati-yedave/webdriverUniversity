/// <reference types="cypress" />

describe("Verifying variables, cypress commands and jquery commands", () => {
  it("Navigating to specific product page failed test", () => {
    cy.visit("https://automationteststore.com/");
    //it will not pass
    const makeuplink = cy
      .get("a[href*='product/category&path=']")
      .contains("Makeup");
    const skincarelink = cy
      .get("a[href*='product/category&path=']")
      .contains("Skincare");
    makeuplink.click();
    skincarelink.click();
  });
  it("Navigating to specific product page pass test", () => {
    cy.visit("https://automationteststore.com/");
    //it will pass
    const makeuplink = cy
      .get("a[href*='product/category&path=']")
      .contains("Makeup");
    makeuplink.click();
    const skincarelink = cy
      .get("a[href*='product/category&path=']")
      .contains("Skincare");
    skincarelink.click();
  });
  it("Navigating to specific product page pass test which recommended", () => {
    //recommended
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Makeup").click();
    cy.get("a[href*='product/category&path=']").contains("Skincare").click();
  });
  it("Navigating to specific product page pass test which recommended", () => {
    //recommended
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Makeup").click();
    //following code will not working because of variable
    // const header = cy.get(".maintext");
    // cy.log(header.text());
    cy.get(".maintext").then(($headertext) => {
      const headertext = $headertext.text();
      cy.log("Found header Text: " + headertext);
      expect(headertext).is.eq("Makeup");
    });
  });
  it.only("Navigating contact us page properties ", () => {
    //recommended
    cy.visit("https://automationteststore.com/index.php?rt=content/contact");
    //Uses cypress command and chaining
    cy.contains("#ContactUsFrm", "Contact Us Form")
      .find("#field_11")
      .should("contain", "First name:");
    //JQuery Approach
    cy.contains("#ContactUsFrm", "Contact Us Form").then((text) => {
      const firstNameText = text.find("#field_11").text();
      cy.log(firstNameText);
      expect(firstNameText).to.contain("First name:");
      //expect(firstNameText).is.eq("First name:"); //its failed beacuse it return selector not text
    });
    //Embeded commands(closure)
    cy.get("#field_11").then((fntext) => {
      cy.log(fntext.text());
      cy.log(fntext);
    });
  });
});
