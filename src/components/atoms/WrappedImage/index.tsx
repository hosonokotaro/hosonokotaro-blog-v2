import React, { ReactEventHandler } from 'react';

import { StyledWrappedImage } from './styledWrappedImage';

interface Props {
  src: string;
  alt?: string;
  handleLoad?: ReactEventHandler<HTMLImageElement>;
}

const WrappedImage: React.VFC<Props> = ({ src, alt = 'image', handleLoad }) => {
  return <StyledWrappedImage src={src} alt={alt} onLoad={handleLoad} />;
};

export default WrappedImage;
