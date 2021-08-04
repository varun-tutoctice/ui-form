/**
 * @type { import("protractor").Config }
 */
 const puppeteer = require('puppeteer');
 var package = require("../package.json");

 //var buildVersion = package.version;
 exports.config = {
  allScriptsTimeout: 220000,
  specs: [
    './features/*.feature'
  ],




  capabilities: {
    'browserName': 'chrome',
    chromeOptions: {
      args: ["--no-sandbox", "--headless", "--disable-gpu", "'start-maximized'" ],
      binary: puppeteer.executablePath(),
    }
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: ['./steps/**/*.ts'],
    format: 'json:../src/assets/automation/results.json',
    format: ['progress'],
  },



  ignoreUncaughtExceptions: true,
  untrackOutstandingTimeouts: true,

  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    })

  },


  onComplete: () => {
    var reporter = require('cucumber-html-reporter');
    var options = {
      theme: 'bootstrap',
      jsonFile: 'src/assets/automation/results.json',
      output: 'src/assets/automation/index.html',
      reportSuiteAsScenarios: true,
      scenarioTimestamp: true,
      launchReport: true,
      metadata: {
        "Platform": "Linux",
        "Parallel": "Scenarios",
        "Executed": "Remote",
    }
  };

    reporter.generate(options);
  },
};
