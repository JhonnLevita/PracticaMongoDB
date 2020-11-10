const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../midlewares/validarCampos');
const { getProducto, actualizarProducto, eliminarProducto, crearProducto } = require('../controllers/productoController');

const { validarJWT } = require('../midlewares/validarJWT');

const router = Router();

router.get('/', getProducto);


router.post('/', [
        validarJWT,
        check('nombres', 'El nombre del producto es obligatorio').not().isEmpty(),
        check('tipo', 'El tipo de producto es necesario').not().isEmpty(),
        check('Cantidad', 'La cantidad de producto es necesario').not().isEmpty(),
        check('precio', 'El precio de producto es necesario').not().isEmpty(),
        validarCampos
    ],
    crearEmpleado);

router.put('/:id', [
        validarJWT,
        check('nombres', 'El nombre del producto es obligatorio').not().isEmpty(),
        check('tipo', 'El tipo de producto es necesario').not().isEmpty(),
        check('Cantidad', 'La cantidad de producto es necesario').not().isEmpty(),
        check('precio', 'El precio de producto es necesario').not().isEmpty(),
        validarCampos
    ],
    actualizarProducto);

router.delete('/:id', validarJWT, eliminarProducto);

module.exports = router;