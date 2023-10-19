// Definimos las url que el frontend va a poder utilizar para hacer operaciones 

const { Router } = require('express');

const router = Router() 

// Traer información 
router.get('/tasks', (req, res) => {
    res.send('retrieving a list of tasks');
})

// Solicitar un solo dato
router.get('/tasks/10', (req, res) => {
    res.send('retrieving a single tasks')
}) 

// Crear un dato 
router.post('/tasks', (req, res) => {
    res.send('creating a new tasks');
})

// Eiminar una tarea
router.delete('/tasks', (req, res) => {
    res.send('delete a tasks');
})

// Actualizar una tarea
router.put('/tasks', (req, res) => {
    res.send('updating a tasks');
})


module.exports = router; 
