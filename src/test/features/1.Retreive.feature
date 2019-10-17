Feature: 1.Retrieve all fixtures
  This is the first task in test

#Currently this test case is failing as there are so many fixtures are
# appearing in response and I can't even delete those because there is no fixture id's for those in response.

  @LOCAL
  Scenario Outline: "<TestCase>"
  As a Customer I want to check if correct count of fixtures is returning or not

    Given The User with Some Get Conditions
    When the User submit the request
    Then User receives the response
    And Count of fixtures is "3"
   And None of the fixtureId should be null
    And Status code should be "200"
    And Status line should be "HTTP/1.1 200 OK"

    Examples:
      |TestCase |
      |Assert that there are 3 fixtures within the returned object.|
