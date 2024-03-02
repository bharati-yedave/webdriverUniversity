/// <reference types="cypress" />
import {
  Before,
  Given,
  When,
  And,
  Then,
} from "cypress-cucumber-preprocessor/steps";

let stub;
Before(() => {
  cy.log("Executing Before steps");
  stub = cy.stub();
});
Given("I access the WebdriverUniversity Login Portal Page", () => {
  cy.visit("https://webdriveruniversity.com/Login-Portal/index.html");
});
When("I access a username {word}", (username) => {
  cy.get("#text").type(username);
});
And("I access a password {word}", (password) => {
  cy.get("#password").type(password);
});
And("I click on the login button", () => {
  cy.get("#login-button").click();
  cy.on("window:alert", stub);
});
Then(
  "I should not be presented with the following message {word} {word}",
  (msg, msg2) => {
    const expectmsg = msg + " " + msg2;
    cy.log(expectmsg);
    cy.log(stub.getCall(0));
    expect(stub.getCall(0)).to.be.calledWith(expectmsg);
  }
);
