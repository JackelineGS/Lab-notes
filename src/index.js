const express = require('express');
const morgan = require('morgan');
const cors = require('cors'); 

const taskRoutes = require('./routes/tasks.routes');
const app = express();
app.use(cors()); // Me va a permitir comunicar ambos servidores 
app.use(morgan('dev'));
app.use(express.json()); //con este cambio exprees va a poder entender los request body 
app.use(taskRoutes);

// El código define un middleware en Express que se ejecutará cuando ocurra un error.
// Toma cuatro parámetros: err, req, res y next
// Cuando se produce un error, este middleware devuelve una respuesta json con el mensaje de error
// proporcionado por el objeto err 
app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    })
})

app.listen(4000)
console.log('Server on port 4000')

// Tengo un servidor que está funcionando en el puerto 3000 
