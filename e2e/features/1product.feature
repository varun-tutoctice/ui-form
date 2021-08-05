Feature: Register product
  Enter all the input fields for General Information and Product Information

  Scenario: User is on registration page and enter General Information
    Given User is on product registration page
    When User enters all the general information
    And User scrolls down to product information
    Then User enters product information

  Scenario: User is on registration page and enter Product Information
    Given User is still on product registration page
    When User enters all the product information
    When Register button will enable
    And User clicks on register
    Then User sees successfull notification
