let router = require("express").Router();

const users = require('../routes/users')
let productos = require('./productos')

router.use('/api/auth', users)
router.use("/api/productos", productos);




module.exports = router;
