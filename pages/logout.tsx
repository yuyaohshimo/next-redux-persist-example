import { useDispatch } from 'react-redux';

import { logout } from 'actions';

const Logout = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Logout</h1>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default Logout;
