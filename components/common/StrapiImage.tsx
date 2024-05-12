import { configs } from '@/utils/configs';
import Image from 'next/image';
import { CSSProperties, FC } from 'react';

export type StrapiImageProps = {
  src?: string;
  width?: number;
  height?: number;
  alt: string;
  objectFit?: string | undefined;
  className?: string;
  style?: CSSProperties;
};

const StrapiImage: FC<StrapiImageProps> = ({
  src,
  width,
  height,
  alt = '',
  className,
  objectFit,
  style,
}) => {
  if (!src || !height || !width) {
    return null;
  }
  const imageUrl = `${configs.mediaUrl}${src}`;

  return (
    <Image
      src={imageUrl}
      width={width}
      height={height}
      alt={alt}
      className={className}
      objectFit={objectFit}
      style={style}
    />
  );
};

export default StrapiImage;
