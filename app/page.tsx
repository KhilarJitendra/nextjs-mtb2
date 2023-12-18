import HeroSection from '../components/herosection/Herosection';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection src="http://localhost:1337/uploads/dsk_1920x840_leather_0fc4f468b6.mp4" />
    </main>
  );
}
