import { chromium, test as baseTest } from "@playwright/test";
import testData from "../testData/testData";
import registration from "../pages/addToCartRegistration.page";

const test = baseTest.extend<{

    Registration: registration;
    testData: testData;
   
}>({  
testData: async ({ page }, use) => {
    await use(new testData(page));
},
Registration: async ({ page }, use) => {
    await use(new registration((page)));
}

})

export default test;
export const expect = test.expect;
const capabilities = {
    browserName: "Chrome", // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    browserVersion: "latest",
    "LT:Options": {
        platform: "Windows 10",
        build: "Playwright Test Build",
        name: "Playwright Test",
        user: '',
        accessKey: '',
        network: true,
        video: true,
        console: true,
        tunnel: false, // Add tunnel configuration if testing locally hosted webpage
        tunnelName: "", // Optional
        geoLocation: '', // country code can be fetched from https://www.lambdatest.com/capabilities-generator/
    },
};