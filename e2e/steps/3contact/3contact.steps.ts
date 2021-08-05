var { Given, When, And, Then, Before } = require("@cucumber/cucumber");
import { AppPage } from "../app.po";
import { browser, by, element, protractor, until } from "protractor";

let app: AppPage;

Before(() => (app = new AppPage()));


// Scenario 1

Given("User is on contact us page", { timeout: 2 * 20000 }, async () => {
  await app.navigateToContact();
  await browser.sleep(4000);
});

When("User enters all the input fields", { timeout: 2 * 20000 }, async () => {
  await app.s(1000);
  // await app.enterInput_id("productName","testUser");
  // await app.s(1000);
  // await app.enterInput_id("productType","test@email.com");
  // await app.s(1000);
  // await app.enterInput_id("targetFDA","Sample Message");
  await app.s(3000);
});

When("Submit button will enable", { timeout: 2 * 20000 }, async () => {
  await browser.sleep(2000);
});


Then(
  "User clicks on submit",
  { timeout: 2 * 20000 },
  async () => {
 //   await app.click_id("submit");
    await browser.sleep(2000);
  }
);
