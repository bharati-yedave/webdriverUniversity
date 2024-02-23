class AutoStore_HairCare_PO {
  addHairCareProductToBasket() {
    globalThis.data.basketProductName.forEach(function (element) {
      cy.addProductToBasket(element);
    });
    cy.get(".dropdown-toggle").find(".fa").click();
  }
}
export default AutoStore_HairCare_PO;
