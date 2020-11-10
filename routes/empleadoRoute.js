const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../midlewares/validarCampos');
const { getEmpleado, actualizarEmpleado, eliminarEmpleado, crearEmpleado } = require('../controllers/empleadoController');

const { validarJWT } = require('../midlewares/validarJWT');


const router = Router();

router.get('/', getEmpleado);


router.post('/', [
        validarJWT,
        check('nombres', 'Los nombres del Empleado  son obligatorios').not().isEmpty(),
        check('email', 'El email del Empleado es obligatorio').not().isEmpty(),

        validarCampos
    ],
    crearEmpleado);

router.put('/:id', [
        validarJWT,
        check('nombres', 'Los nombres del Empleado  son obligatorios').not().isEmpty(),
        check('email', 'El email del Empleado es obligatorio').not().isEmpty(),
        validarCampos
    ],
    actualizarEmpleado);

router.delete('/:id', validarJWT, eliminarEmpleado);

module.exports = router;