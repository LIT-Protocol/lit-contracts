/**
 * Generated Exports
 * This file is auto-generated. DO NOT EDIT UNLESS YOU KNOW WHAT YOU'RE DOING.
 */

const datil = require("./prod/datil.cjs");
const datilDev = require("./prod/datil-dev.cjs");
const datilTest = require("./prod/datil-test.cjs");
// export { nagaDev } from "./prod/naga-dev"; // Network failed to generate
const develop = require("./dev/develop.cjs");

const datilSignatures = require("./signatures/datil.cjs").signatures;
const datilDevSignatures = require("./signatures/datil-dev.cjs").signatures;
const datilTestSignatures = require("./signatures/datil-test.cjs").signatures;
const developSignatures = require("./signatures/develop.cjs").signatures;

module.exports = {
  datil,
  datilDev,
  datilTest,
  develop,
  datilSignatures,
  datilDevSignatures,
  datilTestSignatures,
  developSignatures,
};
