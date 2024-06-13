import { useSelector, useDispatch } from "react-redux"
import { deleteTask } from "../features/tasks/tasksSlice";
import { Link } from "react-router-dom";

const TaskList = () => {
  const taskState = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  }

  return (
    <div>
      <header>
        <h3>Task: {taskState.length}</h3>
        <Link to="create-task">
          Crear tarea
        </Link>
      </header>
      <h1>TaskList</h1>
      {taskState.map(task => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => handleDelete(task.id)}>
            Eliminar
          </button>
          <Link to={`/edit-task/${task.id}`}>
            Editar
          </Link>
        </div>
      ))}
    </div>

  )
}

export default TaskList