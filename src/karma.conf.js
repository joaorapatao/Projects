// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular', 'karma-typescript', '@angular/cli'],
    files: [
      "node_modules/bootstrap/bootstrap.min.css",
      "node_modules/jquery/dist/jquery.min.js",
      
      { pattern: "src/**/*.ts" }, // *.tsx for React Jsx
    ],
    preprocessors: {
      "**/*.ts": "karma-typescript" // *.tsx for React Jsx
    },
    reporters: ["progress", "karma-typescript"],
    browsers: ['Chrome'],

    plugins: [
      'karma-spec-reporter',
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-jasmine-html-reporter',
      'karma-typescript',

      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')

    ],

    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage'),
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml', 'spec', 'karma-typescript'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  });
};