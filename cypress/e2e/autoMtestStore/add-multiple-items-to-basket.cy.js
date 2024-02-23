import AutoStore_Homepage_PO from "../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO.cy";
import AutoStore_HairCare_PO from "../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO.cy";
/// <reference types="cypress" />

describe("Add Multiple items to basket", () => {
  const autostore_HP_PO = new AutoStore_Homepage_PO();
  const addHCPTBasket = new AutoStore_HairCare_PO();
  before(function () {
    cy.fixture("product").then(function (data) {
      globalThis.data = data;
    });
  });
  beforeEach(function () {
    autostore_HP_PO.accessHomepage();
    autostore_HP_PO.clickOn_HairCare_Link();
  });
  it("Add specific product item to basket", () => {
    addHCPTBasket.addHairCareProductToBasket();
  });
});
