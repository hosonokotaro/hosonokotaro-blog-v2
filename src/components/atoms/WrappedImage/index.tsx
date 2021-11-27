import { ReactEventHandler, VFC } from 'react';

import { StyledWrappedImage } from './styledWrappedImage';

interface Props {
  src: string;
  alt?: string;
  handleLoad?: ReactEventHandler<HTMLImageElement>;
}

const WrappedImage: VFC<Props> = ({ src, alt = 'image', handleLoad }) => {
  return <StyledWrappedImage src={src} alt={alt} onLoad={handleLoad} />;
};

export default WrappedImage;
