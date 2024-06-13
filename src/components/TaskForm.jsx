import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../features/tasks/tasksSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import TaskList from "./TaskList";


const TaskForm = () => {
  const [task, setTask] = useState({
    title: '',
    description: ''
  })

  const taskEdit = useSelector(state => state.task)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

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
    console.log(params)
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" type="text" placeholder="tarea..." onChange={handleChange} />
      <textarea name="description" placeholder="Descripción de la tarea..." onChange={handleChange}></textarea>
      <button>Crear tarea</button>
    </form>
  )
}

export default TaskForm