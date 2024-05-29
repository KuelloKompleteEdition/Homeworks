import { useReducer, useCallback } from 'react';
import { TodoReducer } from '../components/TodoReducer';

const initialState = [{
  id: new Date().getTime(),
  description: 'Hacer los challenges',
  done: false
}];

export const useTodo = () => {
  const [todos, dispatch] = useReducer(TodoReducer, initialState);

  const handleAddTodo = useCallback((newTodo) => {
    dispatch({ type: 'add', payload: newTodo });
  }, []);

  const handleDelete = useCallback((todoId) => {
    dispatch({ type: 'delete', payload: todoId });
  }, []);

  const handleToggle = useCallback((todoId) => {
    dispatch({ type: 'toggle', payload: todoId });
  }, []);

  const countTodos = useCallback(() => {
    return todos.length;
  }, [todos]);

  const countPendingTodos = useCallback(() => {
    return todos.filter(todo => !todo.done).length;
  }, [todos]);

  return {
    todos,
    handleAddTodo,
    handleDelete,
    handleToggle,
    countTodos,
    countPendingTodos
  };
};
