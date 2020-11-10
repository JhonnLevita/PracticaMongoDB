const { response } = require('express');
const Empleado = require('../models/productoModel');

const getProducto = async(req, res = response) => {
    const productos = await producto.find().
    populate('usuario');
    populate('nombre');
    populate('tipo');
    populate('cantidad');
    populate('precio');

    res.json({
        ok: true,
        productos
    });
}


const crearProducto = async(req, res = response) => {
    const uid = req.uid;

    const Producto = new Producto({
        usuario: uid,
        ...req.body
    });

    try {

        const productoDB = await producto.save();
        res.json({
            ok: true,
            producto: productoDB
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({

            ok: false,
            msg: 'Error inesperado de servidor'
        });
    }
}
const actualizarProducto = async(req, res = response) => {

    const id = req.params.id;
    const uid = req.uid;

    try {

        const Producto = await Producto.findById(id);
        if (!producto) {
            return res.status(404).json({
                ok: true,
                msg: 'Producto no existe'

            });
        }

        const cambiosProducto = {
            ...req.body,
            usuario: uid
        }

        const productoActualizado = await Producto.findByIdAndUpdate(id, cambiosProducto, { new: true });

        return res.json({
            ok: true,
            producto: productoActualizado

        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperados hable con el administrador'
        });
    }
}
const eliminarProducto = async(req, res = response) => {
    const id = req.params.id;

    try {

        const producto = await producto.findById(id);
        if (!producto) {
            return res.status(404).json({
                ok: true,
                msg: 'Producto no eencontrado'

            });
        }

        await Producto.findByIdAndDelete(id);
        return res.json({
            ok: true,
            msg: 'Producto Eliminado'

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
    getProducto,
    crearProducto,
    actualizarProducto,
    eliminarProducto
}