const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../midlewares/validarCampos');

const { getUsuarios, crearUsuario, actualizarUsuario, eliminarUsuario } = require('../controllers/usuariosController');
const { validarJWT } = require('../midlewares/validarJWT');

const router = Router();

router.get('/', validarJWT, getUsuarios);

//post para crear un usuario
router.post('/', [
        check('empresa', 'El nombre de la empresa es obligatorio').not().isEmpty(),
        check('representante', 'El nombre del Representante de la empresa es obligatorio').not().isEmpty(),
        check('telefono', 'El telefono es obligatorio').not().isEmpty(),
        check('direccion', 'LA Direccion es obligatoria').not().isEmpty(),
        check('password', 'El password es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').not().isEmpty(),
        check('email', 'La estructura del email es incorrecta').isEmail(),
        validarCampos,

    ],
    crearUsuario);

router.put('/:id', [
        validarJWT,
        check('empresa', 'El nombre de la empresa es obligatorio').not().isEmpty(),
        check('representante', 'El nombre del Representante de la empresa es obligatorio').not().isEmpty(),
        check('telefono', 'El telefono es obligatorio').not().isEmpty(),
        check('direccion', 'LA Direccion es obligatoria').not().isEmpty(),
        check('email', 'El email es obligatorio').not().isEmpty(),
        check('email', 'La estructura del email es incorrecta').isEmail(),
        validarCampos,

    ],
    actualizarUsuario);

router.delete('/:id', validarJWT, eliminarUsuario);

module.exports = router;