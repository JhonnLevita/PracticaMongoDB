const OrdenSchema = Schema({
    fechaOrden: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true,
    },
    cantidadOrden: {
        type: int,
        required: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
}, { collection: 'orden' });


OrdenSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

module.exports = model('orden', OrdenSchema);