import { useDispatch } from 'react-redux';

import { signin } from 'actions';

const Signin = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Signin</h1>
      <button onClick={() => dispatch(signin())}>Signin</button>
    </div>
  );
};

export default Signin;
