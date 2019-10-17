Feature: 3.LatencySimulation.feature
  This is the 3rd task in test

#  this is similar to 2nd test case except i have added await() here to ensure syncronisation.
  @LOCAL
  Scenario Outline: "<TestCase>"
  As a Customer I want to async is applied to post request

    Given The User with Some Conditions to store new fixture
    When the User post the request
    Then User receives the response

    Given Get the fixture by fixtureId with delay
    Then User receives the response
        And Status code should be "200"
    And Status line should be "HTTP/1.1 200 OK"

    Examples:
      |TestCase |
      |Bearing the delay in mind, create a new fixture and then retrieve it as soon as it's available|
