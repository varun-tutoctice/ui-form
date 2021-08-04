Feature: Submit feedback in contact page
  User submits feedback

  Scenario: User enters all the input fields in contact page
    Given User is on contact page
    When user enters all the input fields
    And submit button will enable
    Then user clicks on submit
