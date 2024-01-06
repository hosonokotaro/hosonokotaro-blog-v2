import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

// NOTE: Syntax highlighter は value という props が必須
type Props = {
  value: string;
  language: string;
};

const CodeBlock = ({ value, language }: Props) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={tomorrow}
      role="img"
      aria-label="コードスニペットによる説明"
    >
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
