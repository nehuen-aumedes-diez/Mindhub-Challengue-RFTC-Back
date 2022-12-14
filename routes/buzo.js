let router = require('express').Router()
const schema = require('../schemas/buzo')
const validatorBuzo = require('../middlewares/validadorBuzo')

let {create, read, update, destroy, readOne} = require('../controllers/buzo')

router.route('/').get(read)
router.route('/').post(validatorBuzo(schema),create)
router.patch('/:id',update)
router.delete('/:id',destroy)
router.get("/:id", readOne);

module.exports = router;