import { useEffect, useState, VFC } from 'react';

import Spinner from '@/atoms/Spinner';
import WrappedImage from '@/atoms/WrappedImage';

interface Props {
  src: string;
  alt?: string;
}

const LoadingImage: VFC<Props> = ({ src, alt = 'image' }) => {
  const [isLoading, setIsLoading] = useState(true);

  // NOTE: image が cache から取得した場合には、load イベントが発生しないため実装する
  useEffect(() => {
    const timeLimit = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeLimit);
    };
  }, []);

  return (
    <div>
      {isLoading && <Spinner />}
      <WrappedImage
        src={src}
        alt={alt}
        handleLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default LoadingImage;
