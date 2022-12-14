let router = require("express").Router();

const users = require('../routes/users')
let gorra = require('./gorra')
let remeraF = require('./remeraF')
let remeraM = require('./remeraM')
let buzo = require('./buzo')

router.use('/api/auth', users)
router.use("/api/gorra", gorra);
router.use("/api/remeraF", remeraF);
router.use("/api/remeraM", remeraM);
router.use("/api/buzo", buzo);


module.exports = router;
