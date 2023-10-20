const pool = require('../db')

// Traer todas las tareas
const getAllTasks = async (req, res) => {
//res.send('retrieven a list of tasks')

try { 
const allTasks = await pool.query('SELECT * FROM task')
res.json(allTasks.rows)
} catch(error) {
console.log(error.message)    
}

};

// Traer una tarea 
const getTask = async (req, res) => {
// Obtengo el id desde req.params    
    try {
        const {id} = req.params
    const result = await pool.query('SELECT * FROM task WHERE id = $1', [id])
    console.log(result)
    if(result.rows.length === 0) 
    return res.status(404).json({
        message: 'Task not found'
    });
    res.json(result.rows[0]); //devuelve la tarea que has encontrado
    } catch(console) {
        console.log(error.message);
    }
};

// Crear una tarea 
// para ver que datos me estan enviando voy a usar req.body, nos permite conocer la información que nos envían las aplicaciones cliente
 const createTask = async (req, res) => {
    const { title, description } = req.body;
    
    try {
    const result = await pool.query('INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *', [
        title, 
        description]
    );
    res.json(result.rows[0]);

    } catch(error) {
    console.log(error.message);
    res.json({ error: error.message })
    }
};

// Eliminar una tarea 
const deleteTask = async(req, res) => {
    const {id} = req.params;
    const result = await pool.query('DELETE FROM task WHERE id = $1', [id]);
    console.log(result)
    if(result.rowCount === 0)
    return res.status(404).json({
message: 'Task not found'
});
    return res.sendStatus(204);  
};

// Actualizar una tarea 
const updateTask = async(req, res) => {
    const {id} = req.params;
    const { title, description } = req.body;
    console.log(id, title, description);
    const result = await pool.query('UPDATE task SET title = $1, description = $2 WHERE id = $3 RETURNING *', [title, description, id]);
    console.log(result)
    if(result.rows.length === 0) // esta condición es para cuando una tarea no existe
    return res.status(404).json({
        message:"Task not found",
    });
    return res.json(result.rows[0]);
};


module.exports = {
    getAllTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
}