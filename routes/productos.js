let router = require('express').Router()
const schema = require('../schemas/productos')
const validatorProductos = require('../middlewares/validadProductos')

let {create, read, update, destroy, readOne} = require('../controllers/productos')

router.route('/').get(read)
router.route('/').post(validatorProductos(schema),create)
router.patch('/:id',update)
router.delete('/:id',destroy)
router.get("/:id", readOne);

module.exports = router;