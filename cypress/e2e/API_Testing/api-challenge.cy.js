/// <reference types="cypress" />
describe("API Testing challenge over POST, GET, DELETE HTTP request ", () => {
  var randomtext = Math.random().toString(20).substring(1);
  let randompostID = Math.floor(Math.random() * 1000 + 1);
  /*
  //=================================================================================
  it("Create new Comment", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/comments",
      body: {
        text: randomtext,
        postId: randompostID,
      },
    }).then((response) => {
      expect(response.status).to.eql(201);
    });
  });
  //===================================================================================
  it("Locate/retrive new comment and delete", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:3000/comments",
      headers: {
        accept: "application/json",
      },
    }).then((response) => {
      let body = JSON.parse(JSON.stringify(response.body));
      cy.log(body.length);
      expect(body[body.length - 1]).has.property("text", randomtext);
      expect(body[body.length - 1]).has.property("postId", randompostID);
      body.forEach(function (item) {
        expect(item).to.have.all.keys("id", "text", "postId");
        if (item["text"] === randomtext && item["postId"] === randompostID) {
          cy.log(
            "ID : " +
              item["id"] +
              " , Text : " +
              item["text"] +
              " , PostID : " +
              item["postId"]
          );
          cy.request({
            method: "DELETE",
            url: "http://localhost:3000/comments/" + item["id"],
          }).then((response) => {
            expect(response.status).to.eql(200);
          });
        }
      });
    });
  });
*/
  //====================================================================================================
  it.only("POST,GET,DELETE the new comment", () => {
    //post
    cy.request({
      method: "POST",
      url: "http://localhost:3000/comments",
      body: {
        text: randomtext,
        postId: randompostID,
      },
    }).then((response) => {
      expect(response.status).to.eql(201);
      //get
      cy.request({
        method: "GET",
        url: "http://localhost:3000/comments",
        headers: {
          accept: "application/json",
        },
      }).then((response) => {
        let body = JSON.parse(JSON.stringify(response.body));
        cy.log(body.length);
        expect(body[body.length - 1]).has.property("text", randomtext);
        expect(body[body.length - 1]).has.property("postId", randompostID);
        body.forEach(function (item) {
          expect(item).to.have.all.keys("id", "text", "postId");
          if (item["text"] === randomtext && item["postId"] === randompostID) {
            cy.log(
              "ID : " +
                item["id"] +
                " , Text : " +
                item["text"] +
                " , PostID : " +
                item["postId"]
            );
            cy.request({
              method: "DELETE",
              url: "http://localhost:3000/comments/" + item["id"],
            }).then((response) => {
              expect(response.status).to.eql(200);
            });
          }
        });
      });
    });
  });
});
