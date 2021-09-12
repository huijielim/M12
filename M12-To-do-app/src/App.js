import { useState } from "react";
import "./App.css";
import Task from "./Components/Task";

const tasks = [
  {
    id: 1,
    description: "Wash car",
  },
  {
    id: 2,
    description: "Buy groceries",
  },
  {
    id: 3,
    description: "Pay water bill",
  },
  {
    id: 4,
    description: "Walk dog",
  },
];

function App() {
  const [todos, setTodos] = useState(tasks);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { description: inputValue, id: todos.length + 1 }]);
    setInputValue("");
  };

  const handleDelete = (taskId) => {
    const filteredTodos = todos.filter((todo) => todo.id !== taskId);
    setTodos(filteredTodos);
  };

  const handleEdit = (taskId, editedTask) => {
    const editedArray = todos.map((todo) => {
      if (todo.id !== taskId) {
        return todo;
      } else {
        return {
          id: taskId,
          description: editedTask,
        };
      }
    });
    setTodos(editedArray);
  };

  return (
    <>
      <div className='navbar'>my Navbar</div>
      <div className='App'>
        <h1>My To Do List</h1>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='task'
            id='user-input'
            value={inputValue}
            onChange={handleChange}
          />
          <input type='button' value='Add Task' />
        </form>
        <div className='todos-container'>
          {todos.map((task, index) => (
            <Task
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              taskInfo={task}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;


