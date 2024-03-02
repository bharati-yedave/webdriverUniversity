@regression
# command to use for regression :-npx cypress run --spec cypress/e2e/BDD/feature/login.feature -e TAGS="@regression" --headed --browser chrome
Feature: WebdriverUniversity Login Page

    Feature Description:- User must login with valid credentials and unable to login with inmvalid credentials
    @validlogin
    # command to use for regression at specific test scenario :-npx cypress run --spec cypress/e2e/BDD/feature/login.feature -e TAGS="@validlogin" --headed --browser chrome
    Scenario: Login using valid credentials
        Given I access the WebdriverUniversity Login Portal Page
        When I access a username webdriver
        And I access a password webdriver123
        And I click on the login button
        Then I should not be presented with the following message validation succeeded
    @invalidlogin
    # command to use for regression at specific test scenario :-npx cypress run --spec cypress/e2e/BDD/feature/login.feature -e TAGS="@invalidlogin" --headed --browser chrome
    Scenario: Login using invalid credentials
        Given I access the WebdriverUniversity Login Portal Page
        When I access a username webdriver1
        And I access a password webdriver1234
        And I click on the login button
        Then I should not be presented with the following message validation failed

    # another method using DDT data driven testing
    @logintoall
    # command to use for regression at specific test scenario :-npx cypress run --spec cypress/e2e/BDD/feature/login.feature -e TAGS="@logintoall" --headed --browser chrome
    Scenario Outline: Login using valid & invalid credentials
        Given I access the WebdriverUniversity Login Portal Page
        When I access a username <username>
        And I access a password <password>
        And I click on the login button
        Then I should not be presented with the following message <message>

        Examples:
            | username   | password      | message              |
            | webdriver  | webdriver123  | validation succeeded |
            | webdriver1 | webdriver1234 | validation failed    |



