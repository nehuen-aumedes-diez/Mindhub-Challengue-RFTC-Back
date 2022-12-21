let router = require('express').Router()
const schema = require('../schemas/productos')

let {} = require('../controllers/carrito')

router.route('/').get()
router.route('/').post()
router.patch('/:id',)
router.delete('/:id',)
router.get("/:id", );

module.exports = router