Feature: Submit feedback in contact page
  User submits feedback

  Scenario: User enters all the input fields in contact us page
    Given User is on contact us page
    When User enters all the input fields
    And Submit button will enable
    Then User clicks on submit
