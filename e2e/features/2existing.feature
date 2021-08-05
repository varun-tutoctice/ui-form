Feature: New Product is added to Existing Products page
  Check all the registered products in existing page

  Scenario: User checks the registered product from existing product page
    Given User added new product information into the system
    When User is on existing product page
    Then User sees that the product information was added to the database
