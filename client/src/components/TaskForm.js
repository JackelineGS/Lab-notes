import {Button, Card, CardContent, CircularProgress, Grid, TextField, Typography} from '@mui/material'
import { useState, useEffect } from 'react'; 
import {useNavigate, useParams} from 'react-router-dom'

export default function 
TaskForm() {

// Definimos un estado utilizando el hook 'useState'
// Hace una validación apenas cargue el componente 'useParams': trae información de la URL o de la información que estamos recibiendo
// El estado inicial de task es un objeto con las propiedades title y description
// Ambos inician como cadenas vacías
// Se crea la función setTask para actualizar el estado de task

  const [task, setTask] = useState({
    title: '',
    description: '',
  });

  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);


  const navigate = useNavigate(); 
  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    if(editing) {
      const res = await fetch(`http://localhost:4000/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify(task),
        headers: {'Content-Type': 'application/json'},
      });

      const data = await res.json(); 
      console.log(data)
    } else {
      await fetch("http://localhost:4000/tasks", {
        method: "POST",
        body: JSON.stringify(task),
        headers: {'Content-Type': 'application/json'},
      });
    }
    
    setLoading(false)
    navigate('/')
  }; 

// recive un evento e como parámetro
// cuando se llama a la función imprime en la consola el nombre del elemento que disparó el evento

  const handleChange = e => {
    setTask({...task, [e.target.name]: e.target.value});
  }

// Cargamos una sola tarea 
const loadTask = async(id) => {
  const res = await fetch(`http://localhost:4000/tasks/${id}`);
  const data = await res.json(); 
  setTask({title: data.title, description: data.description})
  setEditing(true)
}


// Hace una validación apenas cargue el componente, si colocamos el params.id dentro sin una condicional, se entiende que es un TRUE 
  useEffect(() => {
    if(params.id){
      loadTask(params.id)
    }
  }, [params.id]) //si cambia el ID vuelve a ocurrir esto


  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={3}>
        <Card
          sx={{ mt: 5 }}
          style={{
            backgroundColor: "#1e272e",
            padding: "1rem",
          }}
        >
          <Typography variant="5" textAlign="center" color="white">
            {editing ? "Edit Task" : "Create Task"}
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField // Textfile o imput del titulo
                variant="filled"
                label="Write your title"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="title"
                value={task.title}
                onChange={handleChange}
                InputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <TextField // Es el textfile del contenido
                variant="filled"
                label="Write your description"
                multiline
                rows={4}
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="description"
                value={task.description}
                onChange={handleChange}
                InputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={!task.title || !task.description}
              >
                {loading ? (
                  <CircularProgress color="inherit" size={24} />
                ) : (
                  "Save"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}


