Feature: Register product
  Enter all the input fields information from product information page and register the product

  Scenario: User is on registration page and enter product information
    Given User is on product registration page
    When User enters all the product information
    When register button will enable
    And user clicks on register
    Then user sees successfull notification
