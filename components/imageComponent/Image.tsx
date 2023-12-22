import Image from 'next/image';

interface ImageComponentProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  layout?: 'responsive' | 'fixed' | 'fill' | 'intrinsic';
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
  priority?: boolean;
}

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
