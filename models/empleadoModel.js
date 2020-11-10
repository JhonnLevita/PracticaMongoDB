const { Schema, model } = require('mongoose');


const EmpleadoSchema = Schema({
    nombres: {
        type: String,
        required: true
    },
    rolEmpleado: {
        type: String,
        required: true,
        default: 'empleado_normal'
    },
    email: {
        type: String,
        required: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
}, { collection: 'empleados' });


EmpleadoSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

module.exports = model('Empleado', EmpleadoSchema);