
import React, { useState } from "react";
import './../styles/App.css';
import TodoList from "./TodoList";


const App = () => {
  const[todos, setTodos] = useState([
    {
      id:1,
      text:'Learn React',
      Completed: false
    },
    {
      id:2,
      text:'Build a React app',
      Completed: false
    },
    {
      id:3,
      text:'Deploy the React app',
      Completed:false
    }
  ])

 
  const handleComplete =(id)=>{
       setTodos(prevTodos =>
    prevTodos.map(todo =>
      todo.id === id ? { ...todo, completed: true } : todo
    )
  );
  }
  return (
    <div>

        {/* Do not remove the main div */}
       <h1>Parent Component</h1>
       <TodoList onComplete ={handleComplete} todos={todos}/>
    </div>
  )
}

export default App
