let router = require("express").Router();
const users = require('../routes/users')




router.use('/api/auth', users)







module.exports = router;
