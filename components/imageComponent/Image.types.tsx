export default interface ImageComponentProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  layout?: 'responsive' | 'fixed' | 'fill' | 'intrinsic';
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
  priority?: boolean;
}
