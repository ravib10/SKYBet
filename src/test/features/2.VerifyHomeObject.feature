Feature: 2.VerifyHomeObject.feature
  This is the 2nd task in test

#  Here i am 1st creating the new fixture, then fetching the fixture based on fixture id and then check the value of teamId
  @LOCAL
  Scenario Outline: "<TestCase>"
  As a Customer I want to check if 1st object of TeamID is HOME or not

    Given The User with Some Conditions to store new fixture
    When the User post the request
    Then User receives the response

    Given Get the fixture by fixtureId
    Then User receives the response
    And First object of teamArray has teamId as "HOME"
    And Status code should be "200"
    And Status line should be "HTTP/1.1 200 OK"

    Examples:
      |TestCase |
      |Assert, within the teams array, that the first object has a teamId of 'HOME'.|
