Feature: See existing products
  Check all the registered products in existing page

  Scenario: User checks the registerd product from existing product page
    Given User is on existing product page
    When user needs to check table
    Then user sees product get added to database
