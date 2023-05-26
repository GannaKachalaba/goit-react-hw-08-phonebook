import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={css.link} to="/">
        <span className={css.text}>Home</span>
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          <span className={css.text_pink}>PhoneBook</span>
        </NavLink>
      )}
    </nav>
  );
};
