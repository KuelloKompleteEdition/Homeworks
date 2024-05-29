import React, { useState } from 'react';

export const TodoAdd = ({ handleAddTodo }) => {
  const [description, setDescription] = useState('');

  const onInputChange = (e) => {
    setDescription(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length > 0) {
      handleAddTodo({
        id: new Date().getTime(),
        description,
        done: false,
      });
      setDescription('');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        className="form-control"
        value={description}
        onChange={onInputChange}
      />
      <button className='btn btn-outline-primary mt-1' type="submit">
        Agregar
      </button>
    </form>
  );
};
