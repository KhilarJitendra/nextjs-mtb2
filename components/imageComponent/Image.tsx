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
  const data = await new Promise((resolve) => setTimeout(resolve, 10000));
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
    />
  );
};

export default ImageComponent;
