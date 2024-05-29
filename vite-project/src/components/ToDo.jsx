import React, { useReducer } from 'react';
import { TodoReducer } from './TodoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

const initialState = [{
  id: new Date().getTime(),
  description: 'Hacer los challenges',
  done: false
}];

export const TodoApp = () => {
  const [todos, dispatchTodo] = useReducer(TodoReducer, initialState);

  const handleAddTodo = (newTodo) => {
    dispatchTodo({ type: 'add', payload: newTodo });
  };

  const handleDelete = (todoId) => {
    dispatchTodo({ type: 'delete', payload: todoId });
  };

  return (
    <>
      <h1>TodoApp: {todos.length}, <small>Pendientes: {todos.filter(todo => !todo.done).length}</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} handleDelete={handleDelete} />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </>
  );
};
