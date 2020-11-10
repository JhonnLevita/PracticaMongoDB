const ProductoSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    cantidad: {
        type: int,
        required: true
    },
    precio: {
        type: int,
        required: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
}, { collection: 'producto' });


ProductoSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

module.exports = model('producto', ProductoSchema);