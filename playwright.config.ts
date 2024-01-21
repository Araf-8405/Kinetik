import { devices, PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {

   

    projects: [
        {
            name: "chrome:latest:MacOS Catalina@lambdatest",
            use: {
                viewport: { width: 1920, height: 1080 },
            },
        },
        {
            name: "chrome:latest:Windows 10@lambdatest",
            use: {
                viewport: { width: 1280, height: 720 },
            },
        },
        {
            name: "chrome",
            use: {
                ...devices["Desktop Chrome"]
            }
        },
        {
            name: "firefox",
            use: {
                ...devices["Desktop Firefox"]
            }
        }
    ],
    fullyParallel: true,
    retries: process.env.CI ? 1 : 0,
    workers: process.env.CI ? 1 : 1,

    testMatch: ["addToCartRegistrationpage.test.ts"],
    use: {

        baseURL: "http://automationexercise.com/",
        headless: false,
        screenshot: "on",
        video: "on",
        launchOptions: {
            // slowMo: 1000
        },
    },
    timeout: 30 * 1000 * 6,
   
    reporter: [["dot"], ["json", {
        outputFile: "jsonReports/jsonReport.json"
    }], ["html", {
        open: "never"
    }],['./My-Reporter.js']]

    
};

export default config;