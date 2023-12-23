import styles from './page.module.css';

import HeroContainer from '../containers/HeroContainer/index';

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroContainer
        src="http://localhost:1337/uploads/dsk_1920x840_leather_0fc4f468b6.mp4"
        muted={true}
        loop={true}
        autoPlay={true}
      />
    </main>
  );
}
