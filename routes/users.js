var express = require('express');
const passport = require('../config/passport');
var router = express.Router();
const { signUp, verify, signIn, logInToken, signout } = require('../controllers/user');
const { accountExists } = require('../middlewares/accountExistsSignIn');
const { accountHasBeenVerified } = require('../middlewares/accountHasBeenVerified');
const mustSignIn = require('../middlewares/mustSignIn');
const {accountExistssu} = require('../middlewares/accountExistsSignUp')
const validator = require('../middlewares/validator')
const schema = require('../schemas/user')


// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/signup',validator(schema), accountExistssu ,signUp)
router.post('/signin', accountExists, accountHasBeenVerified ,signIn)
router.post('/token',passport.authenticate('jwt', {session: false}), mustSignIn ,logInToken)
router.put('/signout',passport.authenticate('jwt', {session: false}), signout)
router.get('/verify/:code', verify)

// passport.authenticate('jwt', {session: false}) 

module.exports = router;
