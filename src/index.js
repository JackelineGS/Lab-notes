const express = require('express');
const morgan = require('morgan');

const taskRoutes = require('./routes/tasks.routes');
const app = express();

app.use(morgan('dev'));
app.use(express.json()); //con este cambio exprees va a poder entender los request body 
app.use(taskRoutes);
// Cuando creamos rutas usamos req, res
// Al colocar err indicamos que se espera que está función sea visitada cuando un error ocurra
app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    })
})

app.listen(4000)
console.log('Server on port 4000')

// Tengo un servidor que está funcionando en el puerto 3000 
