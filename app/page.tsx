import styles from './page.module.css';

import CategoryContainer from '@/containers/CategoryContainer/index';
import HeroContainer from '@/containers/HeroContainer/index';

import { Suspense } from 'react';

async function getData() {
  const res = await fetch('http://localhost:1337/api/homepages?populate=*', {
    cache: 'force-cache',
  });

  //   await new Promise((resolve) => setTimeout(resolve, 30000));

  if (!res.ok) {
    throw new Error('Failed To fetch data');
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  const url = data.data[0].attributes.heroVideo;
  const categories = data.data[0].attributes.categories;

  //   console.log('tests', categories);

  return (
    <main className={styles.main}>
      <HeroContainer src={url} muted={true} loop={true} autoPlay={true} />
      <Suspense fallback={<p>Loading UI</p>}>
        <CategoryContainer
          catImages={categories}
          width={355}
          height={236}
          src=""
          alt=""
        />
      </Suspense>
    </main>
  );
}
