import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../features/tasks/tasksSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";


const TaskForm = () => {
  const [task, setTask] = useState({
    title: '',
    description: ''
  })

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const taskEdit = useSelector((state) => state.tasks)

  console.log(taskEdit);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTask({
      ...task,
      id: uuid()
    }));
    navigate("/");
  }

  useEffect(() => {
    if(params.id){
      setTask(taskEdit.find(task => task.id === params.id));
    }
    
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" type="text" placeholder="Titulo..." onChange={handleChange} value={task.title} />
      <textarea name="description" placeholder="Descripción de la tarea..." onChange={handleChange} value={task.description}></textarea>
      <button>Crear tarea</button>
    </form>
  )
}

export default TaskForm