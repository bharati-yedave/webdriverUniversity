//alices()
//invoke()
/// <reference types="cypress" />
describe("Alias and invoke command", () => {
  //examples
  it("validate a specific hair care producdt", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.get(".fixed_wrapper .prdocutname")
      .eq(0)
      .invoke("text")
      .as("productThumbnail");
    cy.get("@productThumbnail").its("length").should("be.gt", 5);
    cy.get("@peoductThumbnail").should("include", "Seaweed Conditioner");
  });
  //challenge
  it("validating product thumbnail", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as("productThumbnail");
    cy.get("@productThumbnail").should("have.length", 16);
    cy.get("@productThumbnail")
      .find(".productcart")
      .invoke("attr", "title")
      .should("include", "Add to Cart");
  });

  //=====================================================================================================================================
  //combining all Alias,Invoke, Variables, iterating through data
  it.only("Calculate total of normal and sale products", () => {
    cy.visit("https://automationteststore.com/");
    // cy.get(".thumbnail")
    //   .find(".oneprice")
    //   .each((el, index, list) => {
    //     const nonSaleProduct = el.text().split("$");

    //   });

    //with alias
    var itemTotal = 0;
    cy.get(".thumbnail").find(".oneprice").invoke("text").as("nonSaleProduct");
    cy.get("@nonSaleProduct").then((listtext) => {
      var nonsaleTotal = 0;
      var productPrice = listtext.split("$");
      for (let i = 0; i < productPrice.length; i++) {
        cy.log(productPrice[i]);
        nonsaleTotal += Number(productPrice[i]);
      }
      itemTotal += nonsaleTotal;
      cy.log("All Non sale item total : " + nonsaleTotal);
    });

    //without alias
    cy.get(".thumbnail")
      .find(".pricenew")
      .invoke("text")
      .then((listtext) => {
        var saleTotal = 0;
        var saleproductPrice = listtext.split("$");
        for (let i = 0; i < saleproductPrice.length; i++) {
          cy.log(saleproductPrice[i]);
          saleTotal += Number(saleproductPrice[i]);
        }
        itemTotal += saleTotal;
        cy.log("All Sale item total : " + saleTotal);
      })
      .then(() => {
        cy.log("Oerall Product total : " + itemTotal);
        expect(itemTotal).to.equal(660.5);
      });
  });
});
