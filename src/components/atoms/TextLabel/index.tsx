type AllowTagName = 'label' | 'span';

type Props = {
  text: string;
  as?: AllowTagName & keyof JSX.IntrinsicElements;
  htmlFor?: string;
};

const TextLabel = ({ text, as: Tag = 'label', htmlFor = '' }: Props) => {
  switch (Tag) {
    case 'label':
      return <Tag htmlFor={htmlFor}>{text}</Tag>;
    case 'span':
    default:
      return <Tag>{text}</Tag>;
  }
};

export default TextLabel;
