/// <reference types="cypress" />
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given("I access the WebdriverUniversity Login Portal Page", () => {
  cy.visit("https://webdriveruniversity.com/Login-Portal/index.html");
});

When("I access a username webdriver", () => {
  cy.get("#text").type(username);
});

And("I access a password webdriver123", () => {
  cy.get("#password");
});
And("I click on the login button", () => {});
Then(
  "I should not be presented with the following message validation succeeded",
  () => {}
);
