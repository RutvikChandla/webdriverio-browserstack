const { config: baseConfig } = require("./base.conf.js");

const localConfig = {
  // Adding browserstackLocal to browserstack-service to initiate local binary
  services: [['@browserstack/wdio-browserstack-service', { browserstackLocal: true, forcelocal: false }]],
  capabilities: [{
    browserName: 'chrome',
    build: 'browserstack-build-1'
  }],
  specs: ['./tests/specs/local_test.js']
};

exports.config = { ...baseConfig, ...localConfig };
