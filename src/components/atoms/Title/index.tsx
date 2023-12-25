import { assignInlineVars } from '@vanilla-extract/dynamic';

import * as Styles from './index.css';
type AllowTagName = 'h2' | 'h3' | 'h4' | 'span';

type Props = {
  text: string;
  as?: AllowTagName & keyof JSX.IntrinsicElements;
};

const Title = ({ text, as: Tag = 'h2' }: Props) => {
  let fontSize: Styles.FontSize;

  switch (Tag) {
    case 'h3':
      fontSize = '1.6rem';
      break;
    case 'h4':
    case 'span':
      fontSize = '1.2rem';
      break;
    default:
      fontSize = '2rem';
  }

  return (
    <Tag
      className={Styles.base}
      style={assignInlineVars({
        [Styles.fontSize]: fontSize,
      })}
    >
      {text}
    </Tag>
  );
};

export default Title;
