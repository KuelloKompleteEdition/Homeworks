import React from 'react';

export const TodoItem = ({ todo, handleDelete }) => {
  return (
    <li className='list-group-item d-flex justify-content-between'>
      <span className='align-self-center'>{todo.description}</span>
      <button className='btn btn-danger' onClick={() => handleDelete(todo.id)}>Borrar</button>
    </li>
  );
};
