const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'))

app.listen(3000)
console.log('Server on port 3000')

// Tengo un servidor que está funcionando en el puerto 3000 
