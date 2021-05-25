// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-mocha-reporter"),
      require("karma-jasmine-diff-reporter"),
      require("karma-coverage-istanbul-reporter"),
      require("@angular-devkit/build-angular/plugins/karma"),
    ],

    // 1 - Trigger
    autoWatch: true,
    restartOnFileChange: true,
    singleRun: false,

    // 2 - Build
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],

    // 3 - Run
    port: 9876,
    browsers: ["ChromeHeadless"],

    // 4 - Report
    colors: true,
    logLevel: config.LOG_INFO,
    reporters: ["jasmine-diff", "mocha"],
    mochaReporter: {
      showDiff: true,
      output: true,
      ignoreSkipped: true,
      colors: {
        success: "green",
        info: "blue",
        warning: "orange",
        error: "red",
      },
      symbols: {
        success: "✓",
        info: "i",
        warning: "⚠",
        error: "X",
      },
    },
    jasmineDiffReporter: {
      color: {
        defaultFg: "black",
        expectedFg: "black",
        expectedBg: "bgGreenBright",
        expectedWhitespaceBg: "bgGreenBright",
        actualFg: "black",
        actualBg: "bgRedBright",
        actualWhitespaceBg: "bgRedBright",
      },
    },

    client: {
      jasmine: {},
      clearContext: false,
    },

    // 5 - Coverage
    coverageIstanbulReporter: {
      dir: require("path").join(__dirname, "./coverage/angular-budget"),
      reports: ["html", "lcovonly", "text-summary"],
      fixWebpackSourcePaths: true,
    },
  });
};
