import React from 'react';

export const TodoItem = ({ todo, handleDelete, handleToggle }) => {
  return (
    <li className='list-group-item d-flex justify-content-between'>
      <span
        className={`align-self-center ${todo.done ? 'text-decoration-line-through' : ''}`}
        onClick={() => handleToggle(todo.id)}
      >
        {todo.description}
      </span>
      <button className='btn btn-danger' onClick={() => handleDelete(todo.id)}>Borrar</button>
    </li>
  );
};
