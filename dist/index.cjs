// dev
const _datil = require("./dev/datil.cjs");
const _datilDev = require("./dev/datil-dev.cjs");
const _datilTest = require("./dev/datil-test.cjs");
const _cayenne = require("./dev/cayenne.cjs");
const _habanero = require("./dev/habanero.cjs");
const _internalDev = require("./dev/internalDev.cjs");
const _manzano = require("./dev/manzano.cjs");
const _nagaDev = require("./dev/naga-dev.cjs");

// prod
const datil = require("./prod/datil.cjs");
const cayenne = require("./prod/cayenne.cjs");
const datilDev = require("./prod/datil-dev.cjs");
const datilTest = require("./prod/datil-test.cjs");
const habanero = require("./prod/habanero.cjs");
const internalDev = require("./prod/internalDev.cjs");
const manzano = require("./prod/manzano.cjs");
const nagaDev = require("./prod/naga-dev.cjs");

module.exports = {
  _datil,
  _datilDev,
  _datilTest,
  _cayenne,
  _habanero,
  _internalDev,
  _manzano,
  _nagaDev,
  datil,
  cayenne,
  datilDev,
  datilTest,
  habanero,
  internalDev,
  manzano,
  nagaDev,
};
