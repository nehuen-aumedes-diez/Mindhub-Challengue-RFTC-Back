let router = require('express').Router()
const schema = require('../schemas/productos')
const schemaUpdate = require('../schemas/modificacion') 
const validatorProducto = require('../middlewares/validatorProduct')

let {create, read, update, destroy, readOne} = require('../controllers/producto')

router.route('/').get(read)
router.route('/').post(validatorProducto(schema),create)
router.patch('/:id',validatorProducto(schemaUpdate),update)
router.delete('/:id',destroy)
router.get("/:id", readOne);

module.exports = router