// Definimos las url que el frontend va a poder utilizar para hacer operaciones 

const { Router } = require('express');
const { getAllTasks, 
        getTask, 
        createTask, 
        deleteTask, 
        updateTask,
     } = require('../controllers/tasks.controller')

// const pool = require('../db');

const router = Router() 

// Traer información 
router.get('/tasks', getAllTasks)
    // const result = await pool.query('SELECT NOW()')
    // res.json(result.rows[0].now) // accedemos al resultado, el objeto row, el primer elemento del arreglo y el atributo now 

// Solicitar un solo dato
router.get('/tasks/:id', getTask) 

// Crear un dato 
router.post('/tasks', createTask)

// Eiminar una tarea
router.delete('/tasks/:id', deleteTask)

// Actualizar una tarea
router.put('/tasks/:id', updateTask)


module.exports = router; 
