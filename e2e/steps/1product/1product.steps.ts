var { Given, When, And, Then, Before } = require("@cucumber/cucumber");
import { AppPage } from "../app.po";
import { browser, by, element, protractor, until } from "protractor";

let app: AppPage;

Before(() => (app = new AppPage()));


// Scenario 1

Given("User is on product registration page", { timeout: 2 * 20000 }, async () => {
  await app.navigateToHomepage();
  await browser.sleep(1000);
});

When("User enters all the general information", { timeout: 2 * 20000 }, async () => {
  await app.s(1000);
  await app.enterInput_id("companyName","Automate-Company");
  await app.s(1000);
  await app.enterInput_id("contactInfo","test");
  await app.s(1000);
  await app.enterInput_id("contactName","test user");
  await app.s(1000);
  await app.enterInput_id("productName","Dell");
  await app.s(1000);
  await app.enterInput_id("targetFDA","FDA");
  await app.s(1000);
  await app.enterInput_id("productType","Laptop");
  await app.s(1000);
  await app.enterInput_id("prDate","08/12/2021");
  await app.s(1000);
});

When("User scrolls down to product information", { timeout: 2 * 20000 }, async () => {
  await browser.sleep(1000);
});


Then("User enters product information",{ timeout: 2 * 20000 }, async () => {
    await browser.sleep(2000);
});



//////////////////////////////////////////////////////////////////////////////////


Given("User is still on product registration page", { timeout: 2 * 20000 }, async () => {
  //await app.navigateToHomepage();
  await browser.sleep(1000);
});

When("User enters all the product information", { timeout: 2 * 20000 }, async () => {
  // await app.s(1000);
  // await app.enterInput_id("companyName","Automate-Company");
  // await app.s(1000);
  // await app.enterInput_id("contactInfo","test");
  // await app.s(1000);
  // await app.enterInput_id("contactName","test user");
  await app.s(1000);
  await app.enterInput_id("productName","Dell");
  await app.s(1000);
  await app.enterInput_id("targetFDA","FDA");
  await app.s(1000);
  await app.enterInput_id("productType","Laptop");
  await app.s(1000);
  await app.enterInput_id("prDate","08/12/2021");
  await app.s(1000);
});

When("Register button will enable", { timeout: 2 * 20000 }, async () => {
  await browser.sleep(1000);
});

When("User clicks on register", { timeout: 2 * 20000 }, async () => {
  await app.click_id("register");
  await browser.sleep(1000);
});


Then("User sees successfull notification",{ timeout: 2 * 20000 },async () => {
    await browser.sleep(3000);
});
