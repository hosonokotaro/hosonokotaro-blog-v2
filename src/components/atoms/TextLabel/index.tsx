type TagName = 'label' | 'span';

type Props = {
  text: string;
  tagName?: TagName;
  htmlFor?: string;
};

const TextLabel = ({ text, tagName = 'label', htmlFor = '' }: Props) => {
  switch (tagName) {
    case 'span':
      return <span>{text}</span>;
    case 'label':
    default:
      return <label htmlFor={htmlFor}>{text}</label>;
  }
};

export default TextLabel;
