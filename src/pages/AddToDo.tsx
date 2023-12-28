import { useState } from 'react';
import { useTodos } from '../hooks/useTodo';

export const AddToDo = () => {
  const [todo, setTodo] = useState('');
  const { handleAddTodo } = useTodos();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTodo(todo);
    setTodo('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className='rounded-md w-72 outline outline-2 m-3 py-1'
          type='text'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          className='px-5 py-1.5 bg-blue-600 rounded-lg text-white'
          type='submit'
        >
          Add
        </button>
      </form>
    </div>
  );
};
