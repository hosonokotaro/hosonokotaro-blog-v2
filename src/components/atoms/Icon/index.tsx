import { assignInlineVars } from '@vanilla-extract/dynamic';

import { defaultVars } from '~/style/theme.css';

import * as Styles from './index.css';
import OpenInNew from './svg/SvgOpenInNew';

type Size = '16' | '24' | '32' | '48';
type FillColor = 'default' | 'link' | 'attention' | 'error';

type Props = {
  iconName: 'OpenInNew' | 'Test';
  fillColor?: FillColor;
  size?: Size;
  viewBox?: string;
  sideMargin?: Styles.SideMargin;
};

const getFillColorVariables = (theme: FillColor) => {
  switch (theme) {
    case 'link':
      return defaultVars.text.color.link;
    case 'attention':
      return defaultVars.text.color.attention;
    case 'error':
      return defaultVars.text.color.error;
    default:
      return defaultVars.text.color.default;
  }
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
            fill: getFillColorVariables(fillColor),
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
