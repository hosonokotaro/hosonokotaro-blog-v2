import { SideMargin, Size, StyledIcon } from './styledIcon';

type Props = {
  fileName: string;
  alt?: string;
  size?: Size;
  sideMargin?: SideMargin;
};

const Icon = ({
  fileName,
  alt = 'icon',
  size = '16',
  sideMargin = '0',
}: Props) => {
  return (
    <StyledIcon
      src={`/static/media/icons/${fileName}`}
      alt={alt}
      width={size}
      height={size}
      size={size}
      sideMargin={sideMargin}
    />
  );
};

export default Icon;
