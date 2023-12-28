import { createContext, useState } from 'react';
import { TodoContextType, TodoType, TodosProviderProps } from './types/type';

export const TodosContext = createContext<TodoContextType | null>(null);

export const ToDoProvider = ({ children }: TodosProviderProps) => {
  const [todos, setTodos] = useState<TodoType[]>(() => {
    const newTodo = localStorage.getItem('todos') || '[]';
    return JSON.parse(newTodo) as TodoType[];
  });

  const handleAddTodo = (task: string) => {
    setTodos((prev) => {
      const newTodos: TodoType[] = [
        {
          id: Math.random().toString(),
          task: task,
          completed: false,
          createdAt: new Date(),
        },
        ...prev,
      ];
      localStorage.setItem('todos', JSON.stringify(newTodos));
      return newTodos;
    });
  };

  const toggleCompleted = (id: string) => {
    setTodos((prev) => {
      const newTodos = prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      localStorage.setItem('todos', JSON.stringify(newTodos));
      return newTodos;
    });
  };
  const handleDelete = (id: string) => {
    setTodos((prev) => {
      const newTodos = prev.filter((todo) => todo.id != id);
      localStorage.setItem('todos', JSON.stringify(newTodos));
      return newTodos;
    });
  };

  return (
    <TodosContext.Provider
      value={{ todos, handleAddTodo, toggleCompleted, handleDelete }}
    >
      {children}
    </TodosContext.Provider>
  );
};
