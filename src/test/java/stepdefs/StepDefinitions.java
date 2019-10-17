package stepdefs;

// I Have created the single stepDefinition file. Another approach could be to create seperate stepDefs files for each Feature.

import static org.awaitility.Awaitility.with;
import io.restassured.http.ContentType;
import org.awaitility.Durations;
import org.awaitility.core.ConditionTimeoutException;
import org.awaitility.core.*;
import java.util.concurrent.TimeUnit;
import static io.restassured.RestAssured.*;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import services.PostBody;

public class StepDefinitions {

    @Given("^The User with Some Get Conditions")
    public void theUserWithSomeGetConditions() throws Throwable {
        BaseStep.request = given();
        BaseStep.scenario.write("Request is generated successfully.");
        BaseStep.APIUrl=BaseStep.prop.getProperty("GetFixtures_API");
    }

    @When("^the User submit the request$")
    public void theUserSubmitTheRequest() {

        BaseStep.response = BaseStep.request.when().get(BaseStep.APIUrl);
        BaseStep.vr = BaseStep.response.then();
        BaseStep.scenario.write("Request is hit with GET method");
    }

    @Then("^User receives the response$")
    public void userReceivesTheResponse() {
        BaseStep.scenario.write("Response received is "+BaseStep.response.asString());
    }

    @And("^Status code should be \"([^\"]*)\"$")
    public void statusCodeShouldBe(int status) {

        try {
//          vr.statusCode(status);
          Assert.assertEquals(BaseStep.response.statusCode(),status);
          BaseStep.scenario.write("Correct status code i.e "+status+" is appearing");
      }
      catch (AssertionError e) {
          BaseStep.scenario.write("In-Correct status code i.e " + BaseStep.response.statusCode() + " is appearing");
          Assert.assertFalse(true);
      }
    }

    @And("^Status line should be \"([^\"]*)\"$")
    public void statusLineShouldBe(String statusLine) {
               try {
            //vr.statusLine(statusLine);
Assert.assertEquals(BaseStep.response.statusLine(),statusLine);
            BaseStep.scenario.write("Correct status Line i.e "+statusLine+" is appearing");
        }
        catch (AssertionError e) {
            BaseStep.scenario.write("In-Correct status Line i.e " + BaseStep.response.statusLine() + " is appearing.\nExpected status line is "+statusLine);
            Assert.assertFalse(true);
        }
    }


    @And("^Count of fixtures is \"([^\"]*)\"$")
    public void countOfFixturesIs(String count) throws Throwable {
int countReturned=BaseStep.response.path("size()");
        BaseStep.scenario.write("Actual count returned is   : " + countReturned+"\nExpected count returned is : "+count);
if(countReturned==Integer.parseInt(count)) {
    Assert.assertTrue(true);
    }
    else {
    Assert.assertTrue(false);
}

}


    @And("^None of the fixtureId should be null$")
    public void noneOfTheFixtureIdShouldBeNull() {
       // BaseStep.vr.body("fixtureId",hasItem(notNullValue()));

               if (BaseStep.response.path("fixtureId") == null) {
            BaseStep.scenario.write("All the values of FixtureId is not null");
            Assert.assertTrue(false);
        }
        else {
            Assert.assertTrue(true);
            BaseStep.scenario.write("None of the value of fixtureId is null");

        }
    }

    @Given("^The User with Some Conditions to store new fixture$")
    public void theUserWithSomeConditionsToStoreNewFixture() {
        BaseStep.APIUrl=BaseStep.prop.getProperty("fixture_API");
        String postBodyIs=PostBody.bodyText(Integer.valueOf(BaseStep.prop.get("newFixtureId").toString()));
        BaseStep.request=given().body(postBodyIs).contentType(ContentType.JSON);
        BaseStep.logger.info("Reqest body is created now.");
        BaseStep.scenario.write("Body which we are going to post is : \n"+postBodyIs);
    }

    @When("^the User post the request$")
    public void theUserPostTheRequest() {
        BaseStep.scenario.write("apiurl is "+BaseStep.APIUrl);
        BaseStep.response = BaseStep.request.when().post(BaseStep.APIUrl);
        BaseStep.vr = BaseStep.response.then();
        BaseStep.scenario.write("Request is hit with POST method");

    }

    @Given("^Get the fixture by fixtureId$")
    public void getTheFixtureByFixtureId() {
//        (Integer)BaseStep.prop.get("newFixtureId")
//        BaseStep.APIUrl=BaseStep.prop.get("fixture_API").toString()+"/"+BaseStep.prop.get("newFixtureId");
//        BaseStep.scenario.write("API Url is "+BaseStep.APIUrl);
//        BaseStep.response=given().when().get(BaseStep.APIUrl);
//        BaseStep.scenario.write("Response of fixture id "+BaseStep.prop.get("newFixtureId")+" is \n"+BaseStep.response.asString());
//

        BaseStep.APIUrl=BaseStep.prop.get("fixture_API").toString()+"/";//+BaseStep.prop.get("newFixtureId");
        BaseStep.response=given().pathParam("id",BaseStep.prop.get("newFixtureId")).when().get(BaseStep.APIUrl+"{id}");
        BaseStep.scenario.write("API Url is "+BaseStep.APIUrl+BaseStep.prop.get("newFixtureId"));
        BaseStep.scenario.write("Response of fixture id "+BaseStep.prop.get("newFixtureId")+" is \n"+BaseStep.response.asString());


    }


    @And("^First object of teamArray has teamId as \"([^\"]*)\"$")
    public void firstObjectOfTeamArrayHasTeamIdAs(String value) throws Throwable {
   String actualValue = BaseStep.response.path("footballFullState.teams[0].teamId");
   BaseStep.scenario.write("Actual value is   : "+actualValue+"\nExpected value is : "+value);
   Assert.assertEquals(value,actualValue);
       }

    @Given("^Get the fixture by fixtureId with delay$")
    public void getTheFixtureByFixtureIdWithDelay() {
        //        (Integer)BaseStep.prop.get("newFixtureId")
        BaseStep.APIUrl=BaseStep.prop.get("fixture_API").toString()+"/"+BaseStep.prop.get("newFixtureId");
        BaseStep.scenario.write("API Url is "+BaseStep.APIUrl);
        BaseStep.response=given().when().get(BaseStep.APIUrl);
                with().pollInterval(Durations.ONE_SECOND).await().atMost(45, TimeUnit.SECONDS)
                .until(()->BaseStep.response.statusCode() == 200);

//        BaseStep.scenario.write("Response of fixture id "+BaseStep.prop.get("newFixtureId")+" is \n"+BaseStep.response.asString());

    //another approach could be we implement our own logic e.g
        //run a for loop till the count of 45, and see if statuscode==200 then move on else use Thread.sleep(1);

    }

    @Given("^Delete the fixture by fixtureId$")
    public void deleteTheFixtureByFixtureId() {
            BaseStep.APIUrl=BaseStep.prop.get("fixture_API").toString()+"/"+BaseStep.prop.get("newFixtureId");
        BaseStep.scenario.write("API Url is "+BaseStep.APIUrl);
        BaseStep.response=given().when().delete(BaseStep.APIUrl);
        BaseStep.scenario.write("Response of fixture id "+BaseStep.prop.get("newFixtureId")+" is \n"+BaseStep.response.asString());

    }

    @And("^Correct response should appear$")
    public void correctResponseShouldAppear() {
        if(BaseStep.response.asString().equals(BaseStep.prop.getProperty("deleteFixtureResponse")))
        {
            Assert.assertTrue(true);
            BaseStep.scenario.write("Deleted the fixture successfully.");
        }
        else
        {
            BaseStep.scenario.write("Can't delete the fixture.");
            Assert.assertTrue(false);
        }
    }
}