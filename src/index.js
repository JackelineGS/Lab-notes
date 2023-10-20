const express = require('express');
const morgan = require('morgan');

const taskRoutes = require('./routes/tasks.routes');
const app = express();

app.use(morgan('dev'));
app.use(express.json()); //con este cambio exprees va a poder entender los request body 
app.use(taskRoutes);

app.listen(4000)
console.log('Server on port 4000')

// Tengo un servidor que está funcionando en el puerto 3000 
