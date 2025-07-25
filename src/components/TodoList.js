import React from 'react';

function TodoList({ todos, onComplete }) {
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ marginBottom: '10px' }}>
            <span >
              {todo.text}
            </span>
            {todo.completed ? (
              <span style={{ marginLeft: '10px', color: 'green' }}>✅</span>
            ) : (
              <button style={{ marginLeft: '10px' }} onClick={() => onComplete(todo.id)}>
                Complete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
