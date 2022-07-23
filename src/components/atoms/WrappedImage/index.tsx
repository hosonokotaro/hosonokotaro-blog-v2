import { ReactEventHandler } from 'react';

import { StyledWrappedImage } from './styledWrappedImage';

type Props = {
  src: string;
  alt?: string;
  handleLoad?: ReactEventHandler<HTMLImageElement>;
};

const WrappedImage = ({ src, alt = 'image', handleLoad }: Props) => {
  return (
    <StyledWrappedImage
      src={src}
      alt={alt}
      loading="lazy"
      width="1000"
      height="1000"
      onLoad={handleLoad}
    />
  );
};

export default WrappedImage;
