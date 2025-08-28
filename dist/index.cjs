/**
 * Generated Exports
 * This file is auto-generated. DO NOT EDIT UNLESS YOU KNOW WHAT YOU'RE DOING.
 */

const nagaDev = require("./prod/naga-dev.cjs");
const nagaTest = require("./prod/naga-test.cjs");
const nagaStaging = require("./prod/naga-staging.cjs");

const nagaDevSignatures = require("./signatures/naga-dev.cjs").signatures;
const nagaTestSignatures = require("./signatures/naga-test.cjs").signatures;
const nagaStagingSignatures = require("./signatures/naga-staging.cjs").signatures;

module.exports = {
  nagaDev,
  nagaTest,
  nagaStaging,
  nagaDevSignatures,
  nagaTestSignatures,
  nagaStagingSignatures,
};
