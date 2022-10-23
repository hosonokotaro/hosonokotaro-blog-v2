import { FillColor, SideMargin, StyledOpenInNew } from './styledIcon';

type Size = '16' | '24' | '32' | '48';

type Props = {
  iconName: 'OpenInNew' | 'Test';
  fillColor?: FillColor;
  size?: Size;
  viewBox?: string;
  sideMargin?: SideMargin;
};

const Icon = ({
  iconName,
  fillColor = 'default',
  size = '24',
  sideMargin = '0',
}: Props) => {
  switch (iconName) {
    case 'OpenInNew':
      return (
        <StyledOpenInNew
          width={size}
          height={size}
          $fillColor={fillColor}
          $sideMargin={sideMargin}
        />
      );
    default:
      return null;
  }
};

export default Icon;
