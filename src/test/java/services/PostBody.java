package services;

public class PostBody
{
    public static String bodyText(int fixtureValue)
    {
        String body="{\n" +
                "        \"fixtureId\": \""+fixtureValue+"\",\n" +
                "        \"fixtureStatus\": {\n" +
                "            \"displayed\": true,\n" +
                "            \"suspended\": false\n" +
                "        },\n" +
                "        \"footballFullState\": {\n" +
                "            \"homeTeam\": \"Manchester United\",\n" +
                "            \"awayTeam\": \"Leeds United\",\n" +
                "            \"finished\": false,\n" +
                "            \"gameTimeInSeconds\": 900,\n" +
                "            \"goals\": [\n" +
                "                {\n" +
                "                    \"clockTime\": 640,\n" +
                "                    \"confirmed\": true,\n" +
                "                    \"id\": 678606,\n" +
                "                    \"ownGoal\": false,\n" +
                "                    \"penalty\": false,\n" +
                "                    \"period\": \"FIRST_HALF\",\n" +
                "                    \"playerId\": 560617,\n" +
                "                    \"teamId\": \"1\"\n" +
                "                },\n" +
                "                {\n" +
                "                    \"clockTime\": 864,\n" +
                "                    \"confirmed\": true,\n" +
                "                    \"id\": 164002,\n" +
                "                    \"ownGoal\": false,\n" +
                "                    \"penalty\": false,\n" +
                "                    \"period\": \"FIRST_HALF\",\n" +
                "                    \"playerId\": 60817,\n" +
                "                    \"teamId\": \"2\"\n" +
                "                }\n" +
                "            ],\n" +
                "            \"period\": \"FIRST_HALF\",\n" +
                "            \"possibles\": [],\n" +
                "            \"corners\": [],\n" +
                "            \"redCards\": [],\n" +
                "            \"yellowCards\": [],\n" +
                "            \"startDateTime\": \"2018-03-20T10:49:38.655Z\",\n" +
                "            \"started\": true,\n" +
                "            \"teams\": [\n" +
                "                {\n" +
                "                    \"association\": \"HOME\",\n" +
                "                    \"name\": \"Manchester-United\",\n" +
                "                    \"teamId\": \"HOME\"\n" +
                "                },\n" +
                "                {\n" +
                "                    \"association\": \"AWAY\",\n" +
                "                    \"name\": \"Leeds-United\",\n" +
                "                    \"teamId\": \"AWAY\"\n" +
                "                }\n" +
                "            ]\n" +
                "        }\n" +
                "    }";

    return body;
    }

}
