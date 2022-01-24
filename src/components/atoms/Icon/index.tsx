import { VFC } from 'react';

import { Size, StyledIcon } from './styledIcon';

type Props = {
  src: string;
  alt?: string;
  size?: Size;
};

const Icon: VFC<Props> = ({ src, alt = 'icon', size = '16' }) => {
  return (
    <StyledIcon src={src} alt={alt} width={size} height={size} size={size} />
  );
};

export default Icon;
