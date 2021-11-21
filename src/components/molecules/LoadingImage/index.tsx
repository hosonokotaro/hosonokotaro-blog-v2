import React, { useState } from 'react';

import Spinner from '@/atoms/Spinner';
import WrappedImage from '@/atoms/WrappedImage';

interface Props {
  src: string;
  alt?: string;
}

const LoadingImage: React.VFC<Props> = ({ src, alt = 'image' }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Spinner />}
      <WrappedImage
        src={src}
        alt={alt}
        handleLoad={() => setIsLoading(false)}
      />
    </>
  );
};

export default LoadingImage;
