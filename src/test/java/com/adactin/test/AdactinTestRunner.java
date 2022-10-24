package com.adactin.test;

import java.io.File;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.adactin.baseclass.BaseClass;
import com.adactin.helper.ConfigReader;
import com.adactin.helper.FileReadManager;
import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(	
		plugin= {"pretty","com.cucumber.listener.ExtentCucumberFormatter:src\\test\\resource\\com\\adactin\\reports\\extentreport.html",
				"html:src\\test\\resource\\com\\adactin\\reports",
				"json:src\\test\\resource\\com\\adactin\\reports.json",
				"junit:src\\test\\resource\\com\\adactin\\reports.xml"
				},
					features="src\\test\\java\\com\\adactin\\feature",
					glue="com.adactin.stepdef",
					tags="@AdactInTesting",
					strict=true,
					dryRun=false,
					monochrome=true
					)

public class AdactinTestRunner {
	
	public static WebDriver driver;
	
	@BeforeClass
	public static void setUp() throws Throwable {
		try {
			String browser = FileReadManager.getInstance().getCr().getBrowser();
			driver = BaseClass.getBrowser(browser);
		} catch (Exception e) {
			e.printStackTrace();
			throw new Exception("Browser Name is Invalid");
		}
	}
	
	@AfterClass
	public static void driverQuit() {
		driver.quit();
		Reporter.loadXMLConfig(new File(System.getProperty("user.dir")+"\\src\\test\\resource\\com\\adactin\\properties\\Extent-config.xml"));
	}
}
