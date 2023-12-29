import BenefitContainer from '@/containers/Benefits/index';
import CategoryContainer from '@/containers/CategoryContainer/index';
import HeroContainer from '@/containers/HeroContainer/index';
import Newsletter from '@/containers/Newsletter/index';

import styles from './page.module.css';

export default async function Home() {
  return (
    <main className={styles.main}>
      <HeroContainer />
      <CategoryContainer />
      <Newsletter />
      <BenefitContainer />
    </main>
  );
}
