const { response } = require('express');
const Empleado = require('../models/empleadoModel');

const getEmpleados = async(req, res = response) => {
    const investigadores = await Empleado.find().
    populate('usuario');
    populate('nombre');
    populate('rolEmpleado');
    populate('email');

    res.json({
        ok: true,
        empleados
    });
}


const crearEmpleado = async(req, res = response) => {
    const uid = req.uid;

    const Empleado = new Empleado({
        usuario: uid,
        ...req.body
    });

    try {

        const empleadoDB = await empleado.save();
        res.json({
            ok: true,
            empleado: empleadoDB
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({

            ok: false,
            msg: 'Error inesperado de servidor'
        });
    }
}
const actualizarEmpleado = async(req, res = response) => {

    const id = req.params.id;
    const uid = req.uid;

    try {

        const empleado = await Empleado.findById(id);
        if (!empleado) {
            return res.status(404).json({
                ok: true,
                msg: 'Empleado no existe'

            });
        }

        const cambiosEmpleado = {
            ...req.body,
            usuario: uid
        }

        const empleadoActualizado = await Empleado.findByIdAndUpdate(id, cambiosEmpleado, { new: true });

        return res.json({
            ok: true,
            empleado: empleadoActualizado

        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperados hable con el administrador'
        });
    }
}
const eliminarEmpleado = async(req, res = response) => {
    const id = req.params.id;

    try {

        const empleado = await empleado.findById(id);
        if (!empleado) {
            return res.status(404).json({
                ok: true,
                msg: 'Investigador no existe'

            });
        }

        await Empleado.findByIdAndDelete(id);
        return res.json({
            ok: true,
            msg: 'Empleado Eliminado'

        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperados hable con el administrador'
        });
    }
}


module.exports = {
    getEmpleado,
    crearEmpleado,
    actualizarEmpleado,
    eliminarEmpleado
}