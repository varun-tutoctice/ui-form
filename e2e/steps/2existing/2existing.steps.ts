var { Given, When, And, Then, Before } = require("@cucumber/cucumber");
import { AppPage } from "../app.po";
import { browser, by, element, protractor, until } from "protractor";

let app: AppPage;

Before(() => (app = new AppPage()));


// Scenario 1

Given("User is on existing product page", { timeout: 2 * 20000 }, async () => {
  await app.navigateToExisting();
  await browser.sleep(1000);
});

When("user needs to check table", { timeout: 2 * 20000 }, async () => {
  await app.s(4000);
});


Then(
  "user sees product get added to database",
  { timeout: 2 * 20000 },
  async () => {
 //   await alert(window.location.pathname);
    await browser.sleep(3000);
  }
);
