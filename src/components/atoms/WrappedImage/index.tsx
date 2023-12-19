import { ReactEventHandler } from 'react';

import * as Styles from './index.css';

type Props = {
  src: string;
  alt?: string;
  handleLoad?: ReactEventHandler<HTMLImageElement>;
};

const WrappedImage = ({ src, alt = 'image', handleLoad }: Props) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={Styles.base}
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
