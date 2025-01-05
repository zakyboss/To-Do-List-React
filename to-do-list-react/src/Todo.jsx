import React, { useState } from 'react';
import './index.css';

export default function Todo() {
  const [todo, setTodo] = useState(['Hello']);

  function handleAddTodo() {
    const newTodo = document.getElementById('todoInput').value.trim();
    if (newTodo) {
      setTodo((todo) => [...todo, newTodo]);
    }
    document.getElementById('todoInput').value = '';
  }

  function handleDeleteTodo(index) {
    setTodo((todo) => todo.filter((_, i) => i !== index));
  }

  return (
    <div className="TodoContainer">
      <h2>Your To-Do's For Today!</h2>
      <input type="text" id="todoInput" placeholder="Enter To-Do" />
      <button onClick={handleAddTodo}>Submit</button>
      <ul>
        {todo.length >= 1 ? (
          todo.map((value, index) => (
            <li key={index}>
              {value} <button onClick={() => handleDeleteTodo(index)}>Delete</button>
            </li>
          ))
        ) : (
          <span>Wasted Time can Never Be Recovered!</span>
        )}
      </ul>
    </div>
  );
}
