/// <reference types="cypress" />

describe("Get Request", () => {
  var result;
  it("Validate status codes of the /posts api", () => {
    result = cy.request("http://localhost:3000/posts");
    result.its("status").should("equal", 200);
  });
  //========================================================================================
  it("Validate keys and valus of the /posts api", () => {
    result = cy.request("http://localhost:3000/posts");
    result.its("body").then((response) => {
      cy.log(response);
      expect(response[0]).has.property("title", "a title");

      //looping through assert response
      for (let i = 0; i < response.length; i++) {
        expect(response[i]).to.have.all.keys("id", "title", "views");
        cy.log(
          "ID : " +
            response[i]["id"] +
            " , Title : " +
            response[i]["title"] +
            " , views : " +
            response[i]["views"]
        );
      }
    });
  });

  //============================================================================================
  it("Validate keys and valus of the /posts api using other method", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:3000/posts",
      headers: {
        accept: "application/json",
      },
    }).then((response) => {
      let body = JSON.parse(JSON.stringify(response.body));
      cy.log(body);
      expect(body[0]).has.property("views", 100);
      //looping through assert response
      body.forEach(function (item) {
        expect(item).to.have.all.keys("id", "title", "views");
        cy.log(
          "ID : " +
            item["id"] +
            " , Title : " +
            item["title"] +
            " , views : " +
            item["views"]
        );
      });
    });
  });
});
