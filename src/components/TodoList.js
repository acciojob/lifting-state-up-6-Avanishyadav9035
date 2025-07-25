import React from 'react'

const TodoList = ({onComplete, todos}) => {
  return (
    <div>
      <h2 style={{marginLeft:'37px'}}>Child Component</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            {!todo.completed && (
              <button onClick={()=>onComplete(todo.id)}>
                Complete
              </button>
            )}
    
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
