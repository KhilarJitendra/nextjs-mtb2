import Style from './Category.module.scss';

import ImageComponentProps from '@/components/imageComponent/Image.types';

import Card from '@/components/card/Card';

interface CatImagesProps {
  category: string;
  imageURL: string;
  alt: string;
}

interface CategoryContainerProps extends ImageComponentProps {
  catImages?: CatImagesProps[];
}

import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

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

const CategoryContainer = async () => {
  const data = await getData();

  const url = data.data[0].attributes.heroVideo;
  const categories = data.data[0].attributes.categories;

  return (
    <div className={`${Style.category_conatiner} ${openSans.className}`}>
      <h2 className={Style.category_conatiner_title}> CATEGORY </h2>

      <Card Images={categories} width={355} height={236} src="" alt="" />
    </div>
  );
};

export default CategoryContainer;
