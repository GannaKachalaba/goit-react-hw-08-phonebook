import { useDispatch, useSelector } from 'react-redux';
import operations from 'redux/Auth/Operations/operations';
import authSelectors from 'redux/Auth/Selectors/selectors';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.selectName);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {name}</p>
      <button className={css.button} type="button" onClick={() => dispatch(operations.logOut())}>
        <span className={css.button__text}>Logout</span>
      </button>
    </div>
  );
}

