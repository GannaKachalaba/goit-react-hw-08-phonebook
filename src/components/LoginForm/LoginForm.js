import { useDispatch } from 'react-redux';
import auth from 'redux/Auth/Operations/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      auth.logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input className={css.input} type="email" name="email" required />
      </label>
      <label className={css.label}>
        Password
        <input className={css.input} type="password" name="password" required minlenght={7} />
      </label>
      <button className={css.button} type="submit">
        <span className={css.button__text}>Login</span>
      </button>
    </form>
  );
};
