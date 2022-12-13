let router = require('express').Router()
const schema = require('../schemas/gorra')
const validatorGorra = require('../middlewares/validadorGorra')


let {create, read, update, destroy, readOne} = require('../controllers/gorra')

router.route('/').get(read)
router.route('/').post(validatorGorra(schema),create)
router.patch('/:id',update)
router.delete('/:id',destroy)
router.get("/:id", readOne);

module.exports = router;