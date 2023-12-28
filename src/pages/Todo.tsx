import { useSearchParams } from 'react-router-dom';
import { useTodos } from '../hooks/useTodo';

export const Todo = () => {
  const { todos, toggleCompleted, handleDelete } = useTodos();
  let filterData = todos;

  const [searchParam] = useSearchParams();
  const todosData = searchParam.get('todos');

  if (todosData === 'active') {
    filterData = filterData.filter((task) => !task.completed);
  }
  if (todosData === 'completed') {
    filterData = filterData.filter((task) => task.completed);
  }

  return (
    <div>
      {filterData?.map((item) => (
        <li
          className={` ${
            item.completed ? 'bg-red-50' : ''
          } list-none w-96 m-auto`}
          key={item.id}
        >
          <div className='flex gap-28 items-center py-4 px-3'>
            <input
              className='my-3'
              type='checkbox'
              id={`todo-${item.id}`}
              checked={item.completed}
              onChange={() => toggleCompleted(item.id)}
            />
            <label
              htmlFor={`todo-${item.id}`}
              className={`${item.completed ? 'line-through text-red-600' : ''}`}
            >
              {item.task}
            </label>
            {item.completed && (
              <button
                className='py-1.5 px-3 bg-red-600 rounded-lg text-white'
                type='button'
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            )}
          </div>
          <hr />
        </li>
      ))}
    </div>
  );
};
