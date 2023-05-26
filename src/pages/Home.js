import css from './Home.module.css';
import phonebook from '../imag/phonebook.jpg';
const styles = {
  container: {
    background: 'pink',
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'green',
    fontWeight: 800,
    fontSize: 55,
    textAlign: 'center',
    marginRight: 50,
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
       <h1 className={css.title}>
        Phone<span className={css.title__color}>book</span>
      </h1>
      <img src={phonebook} alt="phonebook" />
    </div>
  );
}
