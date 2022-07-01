import React, { FormEvent, useState, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from './store/rootReducer';
import { User, addUser } from './store/slices/users';

const Home = lazy(() => import('./screen/home'));

function App() {
  const users = useSelector<ReducerType, User[]>((state) => state.users);
  const dispatch = useDispatch();

  const [name, setName] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleChangeName = (e: any) => {
    setName(e.target.value);
  };

  const handleAddUser = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addUser({ name } as User));
    setName('');
  };

  return (
    <div>
      <form onSubmit={handleAddUser}>
        <input type="text" value={name} onChange={handleChangeName} />
        <button type="submit">Add User</button>
      </form>
      <Suspense fallback={<div>...loading</div>}>
        <Home />
      </Suspense>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default App;
