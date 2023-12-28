import ImageComponent from '@/components/imageComponent/Image';

import ImageComponentProps from '@/components/imageComponent/Image.types';

import Style from './Card.module.scss';

import Skeleton from '@mui/material/Skeleton';

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
    <div className={Style.card_container}>
      {Images &&
        Images.map(({ category, imageURL, alt }) => (
          <div className={Style.card} key={category}>
            <Suspense
              fallback={
                <Skeleton
                  variant="rectangular"
                  width={width}
                  height={height}
                  style={{ background: '#D9D9D9' }}
                  animation="wave"
                />
              }
            >
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
