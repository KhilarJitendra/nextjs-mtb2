import Image from 'next/image';

import ImageComponentProps from './Image.types';

const ImageComponent = ({
  src,
  alt,
  width,
  height,
  layout,
  objectFit,
  objectPosition,
  priority,
}: ImageComponentProps) => {
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
