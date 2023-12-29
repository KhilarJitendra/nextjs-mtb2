import Card from '@/components/card/Card';
import ImageComponentProps from '@/components/imageComponent/Image.types';
// import { getStrapiData } from '@/libs/strapi';
import { Open_Sans } from 'next/font/google';
import Style from './Category.module.scss';

interface CatImagesProps {
  category: string;
  imageURL: string;
  alt: string;
}

interface CategoryContainerProps extends ImageComponentProps {
  catImages?: CatImagesProps[];
}

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const CategoryContainer = async () => {
  //   const data = await getStrapiData();
  const categories = data.data[0].attributes.categories;

  return (
    <div className={`${Style.category_conatiner} ${openSans.className}`}>
      <h2 className={Style.category_conatiner_title}> CATEGORY </h2>
      <Card Images={categories} width={322} height={236} src="" alt="" />
    </div>
  );
};

export default CategoryContainer;
