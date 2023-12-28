import { Link, useSearchParams } from 'react-router-dom';

export const NavBar = () => {
  const [searchParam] = useSearchParams();
  const todosData = searchParam.get('todos');

  return (
    <>
      <div className='flex justify-around w-96 m-auto text-gray-400'>
        <Link to='/'>All</Link>
        <Link to='/?todos=active'>Active</Link>
        <Link to='/?todos=completed'>Completed</Link>
      </div>
      <hr className='w-80 m-auto mb-5' />
    </>
  );
};
