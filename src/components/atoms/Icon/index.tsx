import { VFC } from 'react';

import { Size, StyledIcon } from './styledIcon';

type Props = {
  fileName: string;
  alt?: string;
  size?: Size;
};

const Icon: VFC<Props> = ({ fileName, alt = 'icon', size = '16' }) => {
  return (
    <StyledIcon
      src={`/static/media/icons/${fileName}`}
      alt={alt}
      width={size}
      height={size}
      size={size}
    />
  );
};

export default Icon;
