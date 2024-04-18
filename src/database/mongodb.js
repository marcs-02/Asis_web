const mongoose = require('mongoose');

//CONEXION A MONGODB
const URI = process.env.MONGOURICLOUD;
mongoose.connect(URI)
  .then(() => console.log('¡Mongodb - Conectado!'))
  .catch(err => console.error("Mongodb - Error al conectarse: ",err));

module.exports = mongoose;