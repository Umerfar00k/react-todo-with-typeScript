import { AddToDo } from './pages/AddToDo';
import { NavBar } from './pages/NavBar';
import { Todo } from './pages/Todo';

export const App = () => {
  return (
    <div className='text-center pt-36'>
      <h1>TODO REACT + TYPESCRIPT</h1>
      <NavBar />
      <AddToDo />
      <Todo />
    </div>
  );
};
