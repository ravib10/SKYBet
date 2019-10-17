Feature: 4.DeleteFixture.feature
  This is the 4th task in test

#  here i am creating the new fixture and then deleting the fixture by id.
  @LOCAL
  Scenario Outline: "<TestCase>"
  As a Customer I want to delete fixture

    Given The User with Some Conditions to store new fixture
    When the User post the request
    Then User receives the response
    Given Delete the fixture by fixtureId
    Then User receives the response
    And Correct response should appear

    Examples:
      |TestCase |
      |Create and delete a new fixture.|
