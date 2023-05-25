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
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <img src={phonebook} alt="phonebook" />
    </div>
  );
}
