import { Button } from 'common/Button';
import { useDispatch, useSelector } from 'react-redux';

export const Header = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  return (
    <div>
      <h1>Header</h1>
      <Button
        className='likename'
        hover={true}
        text='src....'
        onClick={() =>
          dispatch({
            type: 'auth/login',
            payload: 'Petro',
          })
        }
      />
      <div>{auth.user.name}</div>
    </div>
  );
};
