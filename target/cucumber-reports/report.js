$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("1.Retreive.feature");
formatter.feature({
  "line": 1,
  "name": "1.Retrieve all fixtures",
  "description": "This is the first task in test",
  "id": "1.retrieve-all-fixtures",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#Currently this test case is failing as there are so many fixtures are"
    },
    {
      "line": 5,
      "value": "# appearing in response and I can\u0027t even delete those because there is no fixture id\u0027s for those in response."
    }
  ],
  "line": 8,
  "name": "\"\u003cTestCase\u003e\"",
  "description": "As a Customer I want to check if correct count of fixtures is returning or not",
  "id": "1.retrieve-all-fixtures;\"\u003ctestcase\u003e\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@LOCAL"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "The User with Some Get Conditions",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "the User submit the request",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User receives the response",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Count of fixtures is \"3\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "None of the fixtureId should be null",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Status code should be \"200\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Status line should be \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "1.retrieve-all-fixtures;\"\u003ctestcase\u003e\";",
  "rows": [
    {
      "cells": [
        "TestCase"
      ],
      "line": 20,
      "id": "1.retrieve-all-fixtures;\"\u003ctestcase\u003e\";;1"
    },
    {
      "cells": [
        "Assert that there are 3 fixtures within the returned object."
      ],
      "line": 21,
      "id": "1.retrieve-all-fixtures;\"\u003ctestcase\u003e\";;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 94467800,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "\"Assert that there are 3 fixtures within the returned object.\"",
  "description": "As a Customer I want to check if correct count of fixtures is returning or not",
  "id": "1.retrieve-all-fixtures;\"\u003ctestcase\u003e\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@LOCAL"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "The User with Some Get Conditions",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "the User submit the request",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User receives the response",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Count of fixtures is \"3\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "None of the fixtureId should be null",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Status code should be \"200\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Status line should be \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.theUserWithSomeGetConditions()"
});
formatter.write("Request is generated successfully.");
formatter.result({
  "duration": 946706800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.theUserSubmitTheRequest()"
});
formatter.write("Request is hit with GET method");
formatter.result({
  "duration": 3695098500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.userReceivesTheResponse()"
});
formatter.write("Response received is [{\"fixtureId\":\"1\",\"fixtureStatus\":{\"displayed\":false,\"suspended\":true},\"footballFullState\":{\"homeTeam\":\"Dagenham \u0026 Redbridge\",\"awayTeam\":\"Österreich\",\"finished\":false,\"gameTimeInSeconds\":2656,\"goals\":[{\"clockTime\":640,\"confirmed\":true,\"id\":678606,\"ownGoal\":false,\"penalty\":false,\"period\":\"FIRST_HALF\",\"playerId\":560617,\"teamId\":\"1\"},{\"clockTime\":864,\"confirmed\":true,\"id\":164002,\"ownGoal\":false,\"penalty\":false,\"period\":\"FIRST_HALF\",\"playerId\":60817,\"teamId\":\"2\"},{\"clockTime\":1312,\"confirmed\":true,\"id\":267245,\"ownGoal\":false,\"penalty\":false,\"period\":\"FIRST_HALF\",\"playerId\":136629,\"teamId\":\"1\"},{\"clockTime\":1760,\"confirmed\":true,\"id\":758030,\"ownGoal\":false,\"penalty\":false,\"period\":\"FIRST_HALF\",\"playerId\":131840,\"teamId\":\"2\"}],\"period\":\"SECOND_HALF\",\"possibles\":[],\"corners\":[],\"redCards\":[],\"yellowCards\":[],\"startDateTime\":\"2018-03-20T10:49:38.655Z\",\"started\":true,\"teams\":[{\"association\":\"HOME\",\"name\":\"Dagenham-\u0026-Redbridge\",\"teamId\":\"HOME\"},{\"association\":\"AWAY\",\"name\":\"Österreich\",\"teamId\":\"AWAY\"}]}},{\"fixtureId\":\"2\",\"fixtureStatus\":{\"displayed\":true,\"suspended\":false},\"footballFullState\":{\"homeTeam\":\"Manchester United\",\"awayTeam\":\"Leeds United\",\"finished\":false,\"gameTimeInSeconds\":900,\"goals\":[{\"clockTime\":640,\"confirmed\":true,\"id\":678606,\"ownGoal\":false,\"penalty\":false,\"period\":\"FIRST_HALF\",\"playerId\":560617,\"teamId\":\"1\"},{\"clockTime\":864,\"confirmed\":true,\"id\":164002,\"ownGoal\":false,\"penalty\":false,\"period\":\"FIRST_HALF\",\"playerId\":60817,\"teamId\":\"2\"}],\"period\":\"FIRST_HALF\",\"possibles\":[],\"corners\":[],\"redCards\":[],\"yellowCards\":[],\"startDateTime\":\"2018-03-20T10:49:38.655Z\",\"started\":true,\"teams\":[{\"association\":\"HOME\",\"name\":\"Manchester-United\",\"teamId\":\"HOME\"},{\"association\":\"AWAY\",\"name\":\"Leeds-United\",\"teamId\":\"AWAY\"}]}},{\"fixtureId\":\"3\",\"fixtureStatus\":{\"displayed\":false,\"suspended\":true},\"footballFullState\":{\"homeTeam\":\"Garforth FC\",\"awayTeam\":\"York FC\",\"finished\":false,\"gameTimeInSeconds\":950,\"goals\":[{\"clockTime\":640,\"confirmed\":true,\"id\":678606,\"ownGoal\":false,\"penalty\":false,\"period\":\"FIRST_HALF\",\"playerId\":560617,\"teamId\":\"1\"}],\"period\":\"FIRST_HALF\",\"possibles\":[],\"corners\":[],\"redCards\":[],\"yellowCards\":[],\"startDateTime\":\"2018-03-20T10:49:38.655Z\",\"started\":true,\"teams\":[{\"association\":\"HOME\",\"name\":\"Garforth-FC\",\"teamId\":\"HOME\"},{\"association\":\"AWAY\",\"name\":\"York-FC\",\"teamId\":\"AWAY\"}]}},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]");
formatter.result({
  "duration": 83189000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 22
    }
  ],
  "location": "StepDefinitions.countOfFixturesIs(String)"
});
formatter.write("Actual count returned is   : 51\nExpected count returned is : 3");
formatter.result({
  "duration": 1797583800,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat stepdefs.StepDefinitions.countOfFixturesIs(StepDefinitions.java:78)\r\n\tat ✽.And Count of fixtures is \"3\"(1.Retreive.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinitions.noneOfTheFixtureIdShouldBeNull()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.statusCodeShouldBe(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "HTTP/1.1 200 OK",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.statusLineShouldBe(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.write("The API Url is:http://localhost:3000/fixtures");
formatter.embedding("text/html", "[\n    {\n        \"fixtureId\": \"1\",\n        \"fixtureStatus\": {\n            \"displayed\": false,\n            \"suspended\": true\n        },\n        \"footballFullState\": {\n            \"homeTeam\": \"Dagenham \u0026 Redbridge\",\n            \"awayTeam\": \"Österreich\",\n            \"finished\": false,\n            \"gameTimeInSeconds\": 2656,\n            \"goals\": [\n                {\n                    \"clockTime\": 640,\n                    \"confirmed\": true,\n                    \"id\": 678606,\n                    \"ownGoal\": false,\n                    \"penalty\": false,\n                    \"period\": \"FIRST_HALF\",\n                    \"playerId\": 560617,\n                    \"teamId\": \"1\"\n                },\n                {\n                    \"clockTime\": 864,\n                    \"confirmed\": true,\n                    \"id\": 164002,\n                    \"ownGoal\": false,\n                    \"penalty\": false,\n                    \"period\": \"FIRST_HALF\",\n                    \"playerId\": 60817,\n                    \"teamId\": \"2\"\n                },\n                {\n                    \"clockTime\": 1312,\n                    \"confirmed\": true,\n                    \"id\": 267245,\n                    \"ownGoal\": false,\n                    \"penalty\": false,\n                    \"period\": \"FIRST_HALF\",\n                    \"playerId\": 136629,\n                    \"teamId\": \"1\"\n                },\n                {\n                    \"clockTime\": 1760,\n                    \"confirmed\": true,\n                    \"id\": 758030,\n                    \"ownGoal\": false,\n                    \"penalty\": false,\n                    \"period\": \"FIRST_HALF\",\n                    \"playerId\": 131840,\n                    \"teamId\": \"2\"\n                }\n            ],\n            \"period\": \"SECOND_HALF\",\n            \"possibles\": [\n                \n            ],\n            \"corners\": [\n                \n            ],\n            \"redCards\": [\n                \n            ],\n            \"yellowCards\": [\n                \n            ],\n            \"startDateTime\": \"2018-03-20T10:49:38.655Z\",\n            \"started\": true,\n            \"teams\": [\n                {\n                    \"association\": \"HOME\",\n                    \"name\": \"Dagenham-\u0026-Redbridge\",\n                    \"teamId\": \"HOME\"\n                },\n                {\n                    \"association\": \"AWAY\",\n                    \"name\": \"Österreich\",\n                    \"teamId\": \"AWAY\"\n                }\n            ]\n        }\n    },\n    {\n        \"fixtureId\": \"2\",\n        \"fixtureStatus\": {\n            \"displayed\": true,\n            \"suspended\": false\n        },\n        \"footballFullState\": {\n            \"homeTeam\": \"Manchester United\",\n            \"awayTeam\": \"Leeds United\",\n            \"finished\": false,\n            \"gameTimeInSeconds\": 900,\n            \"goals\": [\n                {\n                    \"clockTime\": 640,\n                    \"confirmed\": true,\n                    \"id\": 678606,\n                    \"ownGoal\": false,\n                    \"penalty\": false,\n                    \"period\": \"FIRST_HALF\",\n                    \"playerId\": 560617,\n                    \"teamId\": \"1\"\n                },\n                {\n                    \"clockTime\": 864,\n                    \"confirmed\": true,\n                    \"id\": 164002,\n                    \"ownGoal\": false,\n                    \"penalty\": false,\n                    \"period\": \"FIRST_HALF\",\n                    \"playerId\": 60817,\n                    \"teamId\": \"2\"\n                }\n            ],\n            \"period\": \"FIRST_HALF\",\n            \"possibles\": [\n                \n            ],\n            \"corners\": [\n                \n            ],\n            \"redCards\": [\n                \n            ],\n            \"yellowCards\": [\n                \n            ],\n            \"startDateTime\": \"2018-03-20T10:49:38.655Z\",\n            \"started\": true,\n            \"teams\": [\n                {\n                    \"association\": \"HOME\",\n                    \"name\": \"Manchester-United\",\n                    \"teamId\": \"HOME\"\n                },\n                {\n                    \"association\": \"AWAY\",\n                    \"name\": \"Leeds-United\",\n                    \"teamId\": \"AWAY\"\n                }\n            ]\n        }\n    },\n    {\n        \"fixtureId\": \"3\",\n        \"fixtureStatus\": {\n            \"displayed\": false,\n            \"suspended\": true\n        },\n        \"footballFullState\": {\n            \"homeTeam\": \"Garforth FC\",\n            \"awayTeam\": \"York FC\",\n            \"finished\": false,\n            \"gameTimeInSeconds\": 950,\n            \"goals\": [\n                {\n                    \"clockTime\": 640,\n                    \"confirmed\": true,\n                    \"id\": 678606,\n                    \"ownGoal\": false,\n                    \"penalty\": false,\n                    \"period\": \"FIRST_HALF\",\n                    \"playerId\": 560617,\n                    \"teamId\": \"1\"\n                }\n            ],\n            \"period\": \"FIRST_HALF\",\n            \"possibles\": [\n                \n            ],\n            \"corners\": [\n                \n            ],\n            \"redCards\": [\n                \n            ],\n            \"yellowCards\": [\n                \n            ],\n            \"startDateTime\": \"2018-03-20T10:49:38.655Z\",\n            \"started\": true,\n            \"teams\": [\n                {\n                    \"association\": \"HOME\",\n                    \"name\": \"Garforth-FC\",\n                    \"teamId\": \"HOME\"\n                },\n                {\n                    \"association\": \"AWAY\",\n                    \"name\": \"York-FC\",\n                    \"teamId\": \"AWAY\"\n                }\n            ]\n        }\n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    },\n    {\n        \n    }\n]");
formatter.after({
  "duration": 281329400,
  "status": "passed"
});
formatter.uri("2.VerifyHomeObject.feature");
formatter.feature({
  "line": 1,
  "name": "2.VerifyHomeObject.feature",
  "description": "This is the 2nd task in test",
  "id": "2.verifyhomeobject.feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#  Here i am 1st creating the new fixture, then fetching the fixture based on fixture id and then check the value of teamId"
    }
  ],
  "line": 6,
  "name": "\"\u003cTestCase\u003e\"",
  "description": "As a Customer I want to check if 1st object of TeamID is HOME or not",
  "id": "2.verifyhomeobject.feature;\"\u003ctestcase\u003e\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@LOCAL"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "The User with Some Conditions to store new fixture",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "the User post the request",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User receives the response",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Get the fixture by fixtureId",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User receives the response",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "First object of teamArray has teamId as \"HOME\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Status code should be \"200\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Status line should be \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "2.verifyhomeobject.feature;\"\u003ctestcase\u003e\";",
  "rows": [
    {
      "cells": [
        "TestCase"
      ],
      "line": 20,
      "id": "2.verifyhomeobject.feature;\"\u003ctestcase\u003e\";;1"
    },
    {
      "cells": [
        "Assert, within the teams array, that the first object has a teamId of \u0027HOME\u0027."
      ],
      "line": 21,
      "id": "2.verifyhomeobject.feature;\"\u003ctestcase\u003e\";;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3487500,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "\"Assert, within the teams array, that the first object has a teamId of \u0027HOME\u0027.\"",
  "description": "As a Customer I want to check if 1st object of TeamID is HOME or not",
  "id": "2.verifyhomeobject.feature;\"\u003ctestcase\u003e\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@LOCAL"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "The User with Some Conditions to store new fixture",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "the User post the request",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User receives the response",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Get the fixture by fixtureId",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User receives the response",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "First object of teamArray has teamId as \"HOME\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Status code should be \"200\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Status line should be \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.theUserWithSomeConditionsToStoreNewFixture()"
});
formatter.write("Body which we are going to post is : \n{\n        \"fixtureId\": \"5\",\n        \"fixtureStatus\": {\n            \"displayed\": true,\n            \"suspended\": false\n        },\n        \"footballFullState\": {\n            \"homeTeam\": \"Manchester United\",\n            \"awayTeam\": \"Leeds United\",\n            \"finished\": false,\n            \"gameTimeInSeconds\": 900,\n            \"goals\": [\n                {\n                    \"clockTime\": 640,\n                    \"confirmed\": true,\n                    \"id\": 678606,\n                    \"ownGoal\": false,\n                    \"penalty\": false,\n                    \"period\": \"FIRST_HALF\",\n                    \"playerId\": 560617,\n                    \"teamId\": \"1\"\n                },\n                {\n                    \"clockTime\": 864,\n                    \"confirmed\": true,\n                    \"id\": 164002,\n                    \"ownGoal\": false,\n                    \"penalty\": false,\n                    \"period\": \"FIRST_HALF\",\n                    \"playerId\": 60817,\n                    \"teamId\": \"2\"\n                }\n            ],\n            \"period\": \"FIRST_HALF\",\n            \"possibles\": [],\n            \"corners\": [],\n            \"redCards\": [],\n            \"yellowCards\": [],\n            \"startDateTime\": \"2018-03-20T10:49:38.655Z\",\n            \"started\": true,\n            \"teams\": [\n                {\n                    \"association\": \"HOME\",\n                    \"name\": \"Manchester-United\",\n                    \"teamId\": \"HOME\"\n                },\n                {\n                    \"association\": \"AWAY\",\n                    \"name\": \"Leeds-United\",\n                    \"teamId\": \"AWAY\"\n                }\n            ]\n        }\n    }");
formatter.result({
  "duration": 11359300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.theUserPostTheRequest()"
});
formatter.write("apiurl is http://localhost:3000/fixture");
formatter.write("Request is hit with POST method");
formatter.result({
  "duration": 2199355100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.userReceivesTheResponse()"
});
formatter.write("Response received is Fixture has been added");
formatter.result({
  "duration": 891200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.getTheFixtureByFixtureId()"
});
formatter.write("API Url is http://localhost:3000/fixture/5");
formatter.write("Response of fixture id 5 is \n{\"fixtureId\":\"5\",\"fixtureStatus\":{\"displayed\":true,\"suspended\":false},\"footballFullState\":{\"homeTeam\":\"Manchester United\",\"awayTeam\":\"Leeds United\",\"finished\":false,\"gameTimeInSeconds\":900,\"goals\":[{\"clockTime\":640,\"confirmed\":true,\"id\":678606,\"ownGoal\":false,\"penalty\":false,\"period\":\"FIRST_HALF\",\"playerId\":560617,\"teamId\":\"1\"},{\"clockTime\":864,\"confirmed\":true,\"id\":164002,\"ownGoal\":false,\"penalty\":false,\"period\":\"FIRST_HALF\",\"playerId\":60817,\"teamId\":\"2\"}],\"period\":\"FIRST_HALF\",\"possibles\":[],\"corners\":[],\"redCards\":[],\"yellowCards\":[],\"startDateTime\":\"2018-03-20T10:49:38.655Z\",\"started\":true,\"teams\":[{\"association\":\"HOME\",\"name\":\"Manchester-United\",\"teamId\":\"HOME\"},{\"association\":\"AWAY\",\"name\":\"Leeds-United\",\"teamId\":\"AWAY\"}]}}");
formatter.result({
  "duration": 37201600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.userReceivesTheResponse()"
});
formatter.write("Response received is {\"fixtureId\":\"5\",\"fixtureStatus\":{\"displayed\":true,\"suspended\":false},\"footballFullState\":{\"homeTeam\":\"Manchester United\",\"awayTeam\":\"Leeds United\",\"finished\":false,\"gameTimeInSeconds\":900,\"goals\":[{\"clockTime\":640,\"confirmed\":true,\"id\":678606,\"ownGoal\":false,\"penalty\":false,\"period\":\"FIRST_HALF\",\"playerId\":560617,\"teamId\":\"1\"},{\"clockTime\":864,\"confirmed\":true,\"id\":164002,\"ownGoal\":false,\"penalty\":false,\"period\":\"FIRST_HALF\",\"playerId\":60817,\"teamId\":\"2\"}],\"period\":\"FIRST_HALF\",\"possibles\":[],\"corners\":[],\"redCards\":[],\"yellowCards\":[],\"startDateTime\":\"2018-03-20T10:49:38.655Z\",\"started\":true,\"teams\":[{\"association\":\"HOME\",\"name\":\"Manchester-United\",\"teamId\":\"HOME\"},{\"association\":\"AWAY\",\"name\":\"Leeds-United\",\"teamId\":\"AWAY\"}]}}");
formatter.result({
  "duration": 835400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HOME",
      "offset": 41
    }
  ],
  "location": "StepDefinitions.firstObjectOfTeamArrayHasTeamIdAs(String)"
});
formatter.write("Actual value is   : HOME\nExpected value is : HOME");
formatter.result({
  "duration": 39312300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.statusCodeShouldBe(int)"
});
formatter.write("Correct status code i.e 200 is appearing");
formatter.result({
  "duration": 1589900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HTTP/1.1 200 OK",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.statusLineShouldBe(String)"
});
formatter.write("Correct status Line i.e HTTP/1.1 200 OK is appearing");
formatter.result({
  "duration": 331700,
  "status": "passed"
});
formatter.write("API URL is http://localhost:3000/fixture/");
formatter.embedding("text/html", "{\n    \"fixtureId\": \"5\",\n    \"fixtureStatus\": {\n        \"displayed\": true,\n        \"suspended\": false\n    },\n    \"footballFullState\": {\n        \"homeTeam\": \"Manchester United\",\n        \"awayTeam\": \"Leeds United\",\n        \"finished\": false,\n        \"gameTimeInSeconds\": 900,\n        \"goals\": [\n            {\n                \"clockTime\": 640,\n                \"confirmed\": true,\n                \"id\": 678606,\n                \"ownGoal\": false,\n                \"penalty\": false,\n                \"period\": \"FIRST_HALF\",\n                \"playerId\": 560617,\n                \"teamId\": \"1\"\n            },\n            {\n                \"clockTime\": 864,\n                \"confirmed\": true,\n                \"id\": 164002,\n                \"ownGoal\": false,\n                \"penalty\": false,\n                \"period\": \"FIRST_HALF\",\n                \"playerId\": 60817,\n                \"teamId\": \"2\"\n            }\n        ],\n        \"period\": \"FIRST_HALF\",\n        \"possibles\": [\n            \n        ],\n        \"corners\": [\n            \n        ],\n        \"redCards\": [\n            \n        ],\n        \"yellowCards\": [\n            \n        ],\n        \"startDateTime\": \"2018-03-20T10:49:38.655Z\",\n        \"started\": true,\n        \"teams\": [\n            {\n                \"association\": \"HOME\",\n                \"name\": \"Manchester-United\",\n                \"teamId\": \"HOME\"\n            },\n            {\n                \"association\": \"AWAY\",\n                \"name\": \"Leeds-United\",\n                \"teamId\": \"AWAY\"\n            }\n        ]\n    }\n}");
formatter.after({
  "duration": 4177200,
  "status": "passed"
});
formatter.uri("3.LatencySimulation.feature");
formatter.feature({
  "line": 1,
  "name": "3.LatencySimulation.feature",
  "description": "This is the 3rd task in test",
  "id": "3.latencysimulation.feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#  this is similar to 2nd test case except i have added await() here to ensure syncronisation."
    }
  ],
  "line": 6,
  "name": "\"\u003cTestCase\u003e\"",
  "description": "As a Customer I want to async is applied to post request",
  "id": "3.latencysimulation.feature;\"\u003ctestcase\u003e\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@LOCAL"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "The User with Some Conditions to store new fixture",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "the User post the request",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User receives the response",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Get the fixture by fixtureId with delay",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User receives the response",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Status code should be \"200\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Status line should be \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "3.latencysimulation.feature;\"\u003ctestcase\u003e\";",
  "rows": [
    {
      "cells": [
        "TestCase"
      ],
      "line": 19,
      "id": "3.latencysimulation.feature;\"\u003ctestcase\u003e\";;1"
    },
    {
      "cells": [
        "Bearing the delay in mind, create a new fixture and then retrieve it as soon as it\u0027s available"
      ],
      "line": 20,
      "id": "3.latencysimulation.feature;\"\u003ctestcase\u003e\";;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1707400,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "\"Bearing the delay in mind, create a new fixture and then retrieve it as soon as it\u0027s available\"",
  "description": "As a Customer I want to async is applied to post request",
  "id": "3.latencysimulation.feature;\"\u003ctestcase\u003e\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@LOCAL"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "The User with Some Conditions to store new fixture",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "the User post the request",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User receives the response",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Get the fixture by fixtureId with delay",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User receives the response",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Status code should be \"200\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Status line should be \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.theUserWithSomeConditionsToStoreNewFixture()"
});
formatter.write("Body which we are going to post is : \n{\n        \"fixtureId\": \"5\",\n        \"fixtureStatus\": {\n            \"displayed\": true,\n            \"suspended\": false\n        },\n        \"footballFullState\": {\n            \"homeTeam\": \"Manchester United\",\n            \"awayTeam\": \"Leeds United\",\n            \"finished\": false,\n            \"gameTimeInSeconds\": 900,\n            \"goals\": [\n                {\n                    \"clockTime\": 640,\n                    \"confirmed\": true,\n                    \"id\": 678606,\n                    \"ownGoal\": false,\n                    \"penalty\": false,\n                    \"period\": \"FIRST_HALF\",\n                    \"playerId\": 560617,\n                    \"teamId\": \"1\"\n                },\n                {\n                    \"clockTime\": 864,\n                    \"confirmed\": true,\n                    \"id\": 164002,\n                    \"ownGoal\": false,\n                    \"penalty\": false,\n                    \"period\": \"FIRST_HALF\",\n                    \"playerId\": 60817,\n                    \"teamId\": \"2\"\n                }\n            ],\n            \"period\": \"FIRST_HALF\",\n            \"possibles\": [],\n            \"corners\": [],\n            \"redCards\": [],\n            \"yellowCards\": [],\n            \"startDateTime\": \"2018-03-20T10:49:38.655Z\",\n            \"started\": true,\n            \"teams\": [\n                {\n                    \"association\": \"HOME\",\n                    \"name\": \"Manchester-United\",\n                    \"teamId\": \"HOME\"\n                },\n                {\n                    \"association\": \"AWAY\",\n                    \"name\": \"Leeds-United\",\n                    \"teamId\": \"AWAY\"\n                }\n            ]\n        }\n    }");
formatter.result({
  "duration": 3343800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.theUserPostTheRequest()"
});
formatter.write("apiurl is http://localhost:3000/fixture");
formatter.write("Request is hit with POST method");
formatter.result({
  "duration": 5025415000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.userReceivesTheResponse()"
});
formatter.write("Response received is Fixture has been added");
formatter.result({
  "duration": 614900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.getTheFixtureByFixtureIdWithDelay()"
});
formatter.write("API Url is http://localhost:3000/fixture/5");
formatter.result({
  "duration": 1049680000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.userReceivesTheResponse()"
});
formatter.write("Response received is {\"fixtureId\":\"5\",\"fixtureStatus\":{\"displayed\":true,\"suspended\":false},\"footballFullState\":{\"homeTeam\":\"Manchester United\",\"awayTeam\":\"Leeds United\",\"finished\":false,\"gameTimeInSeconds\":900,\"goals\":[{\"clockTime\":640,\"confirmed\":true,\"id\":678606,\"ownGoal\":false,\"penalty\":false,\"period\":\"FIRST_HALF\",\"playerId\":560617,\"teamId\":\"1\"},{\"clockTime\":864,\"confirmed\":true,\"id\":164002,\"ownGoal\":false,\"penalty\":false,\"period\":\"FIRST_HALF\",\"playerId\":60817,\"teamId\":\"2\"}],\"period\":\"FIRST_HALF\",\"possibles\":[],\"corners\":[],\"redCards\":[],\"yellowCards\":[],\"startDateTime\":\"2018-03-20T10:49:38.655Z\",\"started\":true,\"teams\":[{\"association\":\"HOME\",\"name\":\"Manchester-United\",\"teamId\":\"HOME\"},{\"association\":\"AWAY\",\"name\":\"Leeds-United\",\"teamId\":\"AWAY\"}]}}");
formatter.result({
  "duration": 1224500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.statusCodeShouldBe(int)"
});
formatter.write("Correct status code i.e 200 is appearing");
formatter.result({
  "duration": 685000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HTTP/1.1 200 OK",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.statusLineShouldBe(String)"
});
formatter.write("Correct status Line i.e HTTP/1.1 200 OK is appearing");
formatter.result({
  "duration": 496600,
  "status": "passed"
});
formatter.write("API URL is http://localhost:3000/fixture/5");
formatter.embedding("text/html", "{\n    \"fixtureId\": \"5\",\n    \"fixtureStatus\": {\n        \"displayed\": true,\n        \"suspended\": false\n    },\n    \"footballFullState\": {\n        \"homeTeam\": \"Manchester United\",\n        \"awayTeam\": \"Leeds United\",\n        \"finished\": false,\n        \"gameTimeInSeconds\": 900,\n        \"goals\": [\n            {\n                \"clockTime\": 640,\n                \"confirmed\": true,\n                \"id\": 678606,\n                \"ownGoal\": false,\n                \"penalty\": false,\n                \"period\": \"FIRST_HALF\",\n                \"playerId\": 560617,\n                \"teamId\": \"1\"\n            },\n            {\n                \"clockTime\": 864,\n                \"confirmed\": true,\n                \"id\": 164002,\n                \"ownGoal\": false,\n                \"penalty\": false,\n                \"period\": \"FIRST_HALF\",\n                \"playerId\": 60817,\n                \"teamId\": \"2\"\n            }\n        ],\n        \"period\": \"FIRST_HALF\",\n        \"possibles\": [\n            \n        ],\n        \"corners\": [\n            \n        ],\n        \"redCards\": [\n            \n        ],\n        \"yellowCards\": [\n            \n        ],\n        \"startDateTime\": \"2018-03-20T10:49:38.655Z\",\n        \"started\": true,\n        \"teams\": [\n            {\n                \"association\": \"HOME\",\n                \"name\": \"Manchester-United\",\n                \"teamId\": \"HOME\"\n            },\n            {\n                \"association\": \"AWAY\",\n                \"name\": \"Leeds-United\",\n                \"teamId\": \"AWAY\"\n            }\n        ]\n    }\n}");
formatter.after({
  "duration": 8924600,
  "status": "passed"
});
formatter.uri("4.DeleteFixture.feature");
formatter.feature({
  "line": 1,
  "name": "4.DeleteFixture.feature",
  "description": "This is the 4th task in test",
  "id": "4.deletefixture.feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#  here i am creating the new fixture and then deleting the fixture by id."
    }
  ],
  "line": 6,
  "name": "\"\u003cTestCase\u003e\"",
  "description": "As a Customer I want to delete fixture",
  "id": "4.deletefixture.feature;\"\u003ctestcase\u003e\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@LOCAL"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "The User with Some Conditions to store new fixture",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "the User post the request",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User receives the response",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Delete the fixture by fixtureId",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User receives the response",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Correct response should appear",
  "keyword": "And "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "4.deletefixture.feature;\"\u003ctestcase\u003e\";",
  "rows": [
    {
      "cells": [
        "TestCase"
      ],
      "line": 17,
      "id": "4.deletefixture.feature;\"\u003ctestcase\u003e\";;1"
    },
    {
      "cells": [
        "Create and delete a new fixture."
      ],
      "line": 18,
      "id": "4.deletefixture.feature;\"\u003ctestcase\u003e\";;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1598000,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "\"Create and delete a new fixture.\"",
  "description": "As a Customer I want to delete fixture",
  "id": "4.deletefixture.feature;\"\u003ctestcase\u003e\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@LOCAL"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "The User with Some Conditions to store new fixture",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "the User post the request",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User receives the response",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Delete the fixture by fixtureId",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User receives the response",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Correct response should appear",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.theUserWithSomeConditionsToStoreNewFixture()"
});
formatter.write("Body which we are going to post is : \n{\n        \"fixtureId\": \"5\",\n        \"fixtureStatus\": {\n            \"displayed\": true,\n            \"suspended\": false\n        },\n        \"footballFullState\": {\n            \"homeTeam\": \"Manchester United\",\n            \"awayTeam\": \"Leeds United\",\n            \"finished\": false,\n            \"gameTimeInSeconds\": 900,\n            \"goals\": [\n                {\n                    \"clockTime\": 640,\n                    \"confirmed\": true,\n                    \"id\": 678606,\n                    \"ownGoal\": false,\n                    \"penalty\": false,\n                    \"period\": \"FIRST_HALF\",\n                    \"playerId\": 560617,\n                    \"teamId\": \"1\"\n                },\n                {\n                    \"clockTime\": 864,\n                    \"confirmed\": true,\n                    \"id\": 164002,\n                    \"ownGoal\": false,\n                    \"penalty\": false,\n                    \"period\": \"FIRST_HALF\",\n                    \"playerId\": 60817,\n                    \"teamId\": \"2\"\n                }\n            ],\n            \"period\": \"FIRST_HALF\",\n            \"possibles\": [],\n            \"corners\": [],\n            \"redCards\": [],\n            \"yellowCards\": [],\n            \"startDateTime\": \"2018-03-20T10:49:38.655Z\",\n            \"started\": true,\n            \"teams\": [\n                {\n                    \"association\": \"HOME\",\n                    \"name\": \"Manchester-United\",\n                    \"teamId\": \"HOME\"\n                },\n                {\n                    \"association\": \"AWAY\",\n                    \"name\": \"Leeds-United\",\n                    \"teamId\": \"AWAY\"\n                }\n            ]\n        }\n    }");
formatter.result({
  "duration": 3469500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.theUserPostTheRequest()"
});
formatter.write("apiurl is http://localhost:3000/fixture");
formatter.write("Request is hit with POST method");
formatter.result({
  "duration": 1042770600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.userReceivesTheResponse()"
});
formatter.write("Response received is Fixture has been added");
formatter.result({
  "duration": 813500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.deleteTheFixtureByFixtureId()"
});
formatter.write("API Url is http://localhost:3000/fixture/5");
formatter.write("Response of fixture id 5 is \nFixture has been deleted");
formatter.result({
  "duration": 57467300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.userReceivesTheResponse()"
});
formatter.write("Response received is Fixture has been deleted");
formatter.result({
  "duration": 407900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.correctResponseShouldAppear()"
});
formatter.write("Deleted the fixture successfully.");
formatter.result({
  "duration": 348700,
  "status": "passed"
});
formatter.write("API URL is http://localhost:3000/fixture/5");
formatter.embedding("text/html", "\u003chtml\u003e\n  \u003cbody\u003eFixture has been deleted\u003c/body\u003e\n\u003c/html\u003e");
formatter.after({
  "duration": 316198400,
  "status": "passed"
});
});