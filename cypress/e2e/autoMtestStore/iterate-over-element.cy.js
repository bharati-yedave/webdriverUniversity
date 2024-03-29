//each()
//wrap()
/// <reference types="cypress" />
describe("Iterate over elements", () => {
  beforeEach(function () {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  });
  it("Log information of all hair care products", () => {
    cy.get(".fixed_wrapper .prdocutname").each((ele, index, list) => {
      cy.log("list [" + index + "] is : " + ele.text());
      cy.log(list.text());
    });
  });
  it("Add specific product to basket", () => {
    cy.selectProduct("Curls to straight Shampoo");
  });
  it("Add another specific product to basket", () => {
    cy.selectProduct("Eau Parfumee au The Vert Shampoo");
  });
  it("Add another specific product to basket 2", () => {
    cy.selectProduct("Seaweed Conditioner");
  });
});
