import styles from './page.module.css';

import SliderSlick from '@/components/slick/slider';

export default function Home() {
  return (
    <main className={styles.main}>
      <SliderSlick />
    </main>
  );
}
