Feature: Successful login to FE

Scenario: User Login Functionality

    Given I am on the login page of the FE application
    When I enter valid credentials
    And I click login button
    Then Account icon is present