let router = require('express').Router()
const schema = require('../schemas/remera')
const validatorRemera = require('../middlewares/validadorRemera')

let {create, read, update, destroy, readOne} = require('../controllers/remera')

router.route('/').get(read)
router.route('/').post(validatorRemera(schema),create)
router.patch('/:id',update)
router.delete('/:id',destroy)
router.get("/:id", readOne);

module.exports = router;