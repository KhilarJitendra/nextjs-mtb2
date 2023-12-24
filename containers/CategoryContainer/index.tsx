import Style from './Category.module.scss';

import ImageComponent from '@/components/imageComponent/Image';
import ImageComponentProps from '@/components/imageComponent/Image.types';

interface CatImagesProps {
  category: string;
  imageURL: string;
  alt: string;
}

interface CategoryContainerProps extends ImageComponentProps {
  catImages: CatImagesProps[];
}

import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const CategoryContainer = async ({
  catImages,
  width,
  height,
  layout,
}: CategoryContainerProps) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div className={`${Style.category_conatiner} ${openSans.className}`}>
      <h2 className={Style.category_conatiner_title}> CATEGORY </h2>
      <div className={Style.category_card_container}>
        {catImages &&
          catImages.map(({ category, imageURL, alt }) => (
            <div className={Style.card} key={category}>
              <ImageComponent
                src={imageURL}
                alt={alt}
                width={width}
                height={height}
                layout={layout}
              />
              <p className={Style.card_desc}>{category}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CategoryContainer;
