package services;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;
import net.masterthought.cucumber.Reportable;
import java.io.File;

import java.util.ArrayList;
import java.util.List;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Report {

    static String projectpath = System.getProperty("user.dir");
    static String saparater = System.getProperty("file.separator");
    private List <String> fileList;
    static String SOURCE_FOLDER=null;

    static String filename = null;
    public Report() {
        fileList = new ArrayList < String > ();
        Date curDate = new Date();
        SimpleDateFormat format = new SimpleDateFormat("dd-MMM-yyyy-hh-mm");
        String DateToStr = format.format(curDate);
        System.out.println(DateToStr);
        SOURCE_FOLDER = projectpath+saparater+"target"+saparater+"cucumber-html-reports";

    }

    // public void GenerateHTMLreport() {
    public static void main(String[] args) throws InterruptedException,Exception{
        String projectpath = System.getProperty("user.dir");
        String jsonpath = projectpath+saparater+"target"+saparater+"json"+saparater+"cucumber.json";
        String htmlpath = projectpath+saparater+"target";
        File reportOutputDirectory = new File(htmlpath);
        List<String> jsonFiles = new ArrayList();
        jsonFiles.add(jsonpath);
        String projectName = "SKY Bet - Test Report ";

        Configuration configuration = new Configuration(reportOutputDirectory, projectName);
        ReportBuilder reportBuilder = new ReportBuilder(jsonFiles, configuration);
        Reportable result = reportBuilder.generateReports();
    }
}