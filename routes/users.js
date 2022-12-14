var express = require('express');
var router = express.Router();
const { signUp, verify } = require('../controllers/user')
// const {accountExists} = require('../middlewares/accountExistsSignUp')
const validator = require('../middlewares/validator')
const schema = require('../schemas/user')


// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/signup',validator(schema), signUp)
router.get('/verify/:code', verify)


module.exports = router;
