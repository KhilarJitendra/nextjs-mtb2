import Image from 'next/image';
import ImageComponentProps from './Image.types';

const ImageComponent = async ({
  src,
  alt,
  width,
  height,
  layout,
  objectFit,
  objectPosition,
  priority,
}: ImageComponentProps) => {
  //   const data = await new Promise((resolve) => setTimeout(resolve, 100000));
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      layout={layout}
      objectFit={objectFit}
      objectPosition={objectPosition}
      priority={priority}
      sizes="(min-width: 320px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw"
    />
  );
};

export default ImageComponent;
