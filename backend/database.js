// Lógicas de conexión a la base de datos.
const mongoose = require('mongoose');

console.log(process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true, // Configuración para que mongoose no nos lance un error en pantalla.
    useUnifiedTopology: true
})
.then( db => console.log('Db is conected'))
.catch(err => console.error(err));