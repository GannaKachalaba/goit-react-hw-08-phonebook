import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div>
      <NavLink className={css.link} to="/register">
        <span className={css.text}>Register</span>
      </NavLink>
      <NavLink className={css.link} to="/login">
        <span className={css.text}>Login</span>
      </NavLink>
    </div>
  );
};
