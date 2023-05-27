import homeBg from '../imag/homeBg.jpg';
const styles = {
  container: {
    background: 'pink',
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <img src={homeBg} alt="homeBg" />
    </div>
  );
}
