import { ReactNode } from 'react';

export interface TodosProviderProps {
  children: ReactNode;
}

export interface TodoType {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
}

export interface TodoContextType {
  todos: TodoType[];
  handleAddTodo: (task: string) => void;
  toggleCompleted: (id: string) => void;
  handleDelete: (id: string) => void;
}
