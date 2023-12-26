import ImageComponent from '@/components/imageComponent/Image';

import ImageComponentProps from '@/components/imageComponent/Image.types';

import Style from './Card.module.scss';

import { Suspense } from 'react';
interface ImagesProps {
  category: string;
  imageURL: string;
  alt: string;
}

interface CardProps extends ImageComponentProps {
  Images: ImagesProps[];
}

const Card = async ({ Images, width, height, layout }: CardProps) => {
  return (
    <div className={Style.category_card_container}>
      {Images &&
        Images.map(({ category, imageURL, alt }) => (
          <div className={Style.card} key={category}>
            <Suspense fallback={<p>Loading UI</p>}>
              <ImageComponent
                src={imageURL}
                alt={alt}
                width={width}
                height={height}
                layout={layout}
              />
              <p className={Style.card_desc}>{category}</p>
            </Suspense>
          </div>
        ))}
    </div>
  );
};

export default Card;
