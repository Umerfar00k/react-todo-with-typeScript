import { useContext } from 'react';
import { TodosContext } from '../context/ToDo';

export const useTodos = () => {
  const todosConsumer = useContext(TodosContext) || {
    todos: [],
    handleAddTodo: () => {},
    toggleCompleted: () => {},
    handleDelete: () => {},
  };
  return todosConsumer;
};
