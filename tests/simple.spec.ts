import { Wopee } from "@wopee-io/wopee.pw";
import { test } from "@playwright/test";

let wopee: Wopee = new Wopee();

test("Home Page", async ({ page }, testInfo) => {
  await wopee.startSuite(process.env.WOPEE_SUITE_NAME || `Simple Example ${new Date().toLocaleString()}`);
  await wopee.startScenario(test.info().title, testInfo);

  await page.goto(process.env.WOPEE_PROJECT_URL || "https://dronjo.wopee.io");
  await wopee.trackFullPage({ stepName: "Check Home Page", page });

  await wopee.stopScenario();
});
