package stepdefs;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;
import org.apache.log4j.Logger;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class BaseStep {

    static Response response;
    static ValidatableResponse json;
    static RequestSpecification request;
    static ValidatableResponse vr;
    static String APIUrl= null;

    static Scenario scenario=null;
    static Properties prop = new Properties();

    static Logger logger = Logger.getLogger(StepDefinitions.class);
    // Before Starting the Scenarios Execution load all properties files
    @Before
    public void beforeScenario(Scenario scenario1)throws IOException {
        scenario = scenario1;
        logger.info("Scenario :"+scenario.getName() +" Started....");
        String saparater = System.getProperty("file.separator");
        String projectPath = System.getProperty("user.dir");

        String configpath = projectPath+saparater+"src"+saparater+"test"+saparater+"java"+saparater+"utils"+saparater+"config.properties";
        //logger.info("Config File :"+configpath +" Loaded Successfully....");
        prop.load(new FileInputStream(configpath));


    }

    @After
    public void afterScenario(Scenario scenario)throws IOException {
        //If Scenario Failed Print the Response in the HTML report for reference
        if(scenario.isFailed()){
            scenario.write("The API Url is:" + APIUrl);
            String s = response.body().prettyPrint();
            scenario.embed(s.getBytes(),"text/html");
            logger.error("Scenario :"+scenario.getName() +"Ended....And STATUS IS: "+scenario.getStatus());
        }else {
            String s = response.body().prettyPrint();
            scenario.write("API URL is "+APIUrl);
            scenario.embed( s.getBytes(),"text/html");
            logger.info("Scenario :"+scenario.getName() +"Ended....And STATUS IS: "+scenario.getStatus());
        }
    }

}
