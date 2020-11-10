require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { dbconection } = require('./database/config');
const app = express();

// configurar CORS
app.use(cors());

//Lectura y parseo del body
app.use(express.json());

// conexion a base de datos
dbconection();

//rutas del API
app.use('/api/usuarios', require('./routes/usuariosRoute'));
app.use('/api/empleados', require('./routes/empleadoRoute'));
app.use('/api/empleados', require('./routes/productoRoute'));
app.use('/api/login', require('./routes/authRoute'));

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto ' + process.env.PORT);
})