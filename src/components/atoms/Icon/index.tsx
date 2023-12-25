import { assignInlineVars } from '@vanilla-extract/dynamic';

import * as Styles from './index.css';
import OpenInNew from './svg/SvgOpenInNew';

type Size = '16' | '24' | '32' | '48';

type Props = {
  iconName: 'OpenInNew' | 'Test';
  fillColor?: Styles.FillColor;
  size?: Size;
  viewBox?: string;
  sideMargin?: Styles.SideMargin;
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
        <OpenInNew
          className={Styles.base}
          style={{
            ...assignInlineVars({
              [Styles.sideMargin]: `0px ${sideMargin}px`,
            }),
            // FIXME: vanilla-extract で CSS 変数の key name を変数として渡せないので根本的に修正したい
            fill: `var(--text-color-${fillColor})`,
          }}
          width={size}
          height={size}
        />
      );
    default:
      return null;
  }
};

export default Icon;
