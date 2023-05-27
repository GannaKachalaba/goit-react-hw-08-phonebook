import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={css.link} to="/">
      <span className={css.text}>PHONE</span><span className={css.text_pink}>BOOK</span>
        <span className={css.text}>HOME</span>
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          {/* <span className={css.text_pink}>PhoneBook</span> */}
        </NavLink>
      )}
    </nav>
  );
};
