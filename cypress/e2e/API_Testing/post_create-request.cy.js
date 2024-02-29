/// <reference types="cypress" />

describe("Post Request", () => {
  var titleOfPost = new Array();

  it("Create a new post via /posts api and validate the status code 201", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/posts",
      body: {
        title: "Want to learn automation testing?",
        author: "Sarah Jones",
      },
    }).then((response) => {
      expect(response.status).to.eql(201);
    });
  });
  //========================================================================================
  it("Validate title of latest post", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:3000/posts",
      headres: {
        accept: "application/json",
      },
    })
      .then((response) => {
        let body = JSON.parse(JSON.stringify(response.body));
        body.forEach(function (item) {
          titleOfPost.push(item["title"]);
        });
        cy.log(titleOfPost);
      })
      .then(() => {
        var latestPost = titleOfPost[titleOfPost.length - 1];
        expect(latestPost).to.eq("Want to learn automation testing?");
      });
  });
  //============================================================================================

  let randomtitle =
    Math.random().toString(36).substring(1) +
    Math.random().toString(36).substring(1);
  it.only("Create a new post using random generation dynamic data via /posts api and validate the status code 201 ", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/posts",
      body: {
        title: randomtitle,
        author: "Sarah Jones",
      },
    }).then((response) => {
      expect(response.status).to.eql(201);
    });
  });
  //============================================================================================
  it.only("Validate title of latest post using random title", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:3000/posts",
      headres: {
        accept: "application/json",
      },
    })
      .then((response) => {
        let body = JSON.parse(JSON.stringify(response.body));
        body.forEach(function (item) {
          titleOfPost.push(item["title"]);
        });
        cy.log(titleOfPost);
      })
      .then(() => {
        var latestPost = titleOfPost[titleOfPost.length - 1];
        expect(latestPost).to.eq(randomtitle);
      });
  });
});
