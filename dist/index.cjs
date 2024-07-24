// dev
const _datil = require("./dev/datil.js").datil;
const _datilDev = require("./dev/datil-dev.js").datilDev;
const _datilTest = require("./dev/datil-test.js").datilTest;
const _cayenne = require("./dev/cayenne.js").cayenne;
const _habanero = require("./dev/habanero.js").habanero;
const _internalDev = require("./dev/internalDev.js").internalDev;
const _manzano = require("./dev/manzano.js").manzano;

// prod
const datil = require("./prod/datil.js").datil;
const cayenne = require("./prod/cayenne.js").cayenne;
const datilDev = require("./prod/datil-dev.js").datilDev;
const datilTest = require("./prod/datil-test.js").datilTest;
const habanero = require("./prod/habanero.js").habanero;
const internalDev = require("./prod/internalDev.js").internalDev;
const manzano = require("./prod/manzano.js").manzano;

module.exports = {
  _datil,
  _datilDev,
  _datilTest,
  _cayenne,
  _habanero,
  _internalDev,
  _manzano,
  datil,
  cayenne,
  datilDev,
  datilTest,
  habanero,
  internalDev,
  manzano,
};
