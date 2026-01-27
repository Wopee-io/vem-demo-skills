import { Wopee } from "@wopee-io/wopee.pw";
import { test } from "@playwright/test";

test.describe("Minimal Example", () => {
  let wopee: Wopee;

  test.beforeAll(async () => {
    wopee = new Wopee();
    await wopee.startSuite(`Minimal Example ${new Date().toISOString().substring(0, 16)}`);
  });

  test.beforeEach(async ({}, testInfo) => {
    await wopee.startScenario(test.info().title, testInfo);
  });

  test.afterEach(async () => {
    await wopee.stopScenario();
  });

  
  test("Home Page", async ({ page }) => {
    await page.goto("https://dronjo.wopee.io");

    await wopee.trackFullPage({ stepName: "Check Full Page", page});

    await wopee.trackElement({ stepName: "Check Logo", locator: page.locator('.navbar-brand img') });
  });

  test("Gallery Page", async ({ page }, testInfo) => {
    await page.goto("https://dronjo.wopee.io/gallery.html");

    await wopee.trackFullPage({ stepName: testInfo.title, page });

    await wopee.trackElement({ stepName: "Check Menu", locator: page.locator('.navbar .container') });
  });
  
});
