import ReactMarkdown from 'react-markdown';

import CodeBlock from '@/atoms/CodeBlock';
import ContentBox from '@/atoms/ContentBox';
import InlineCode from '@/atoms/InlineCode';
import TextBox from '@/atoms/TextBox';
import TextItem from '@/atoms/TextItem';
import TextList from '@/atoms/TextList';
import Title from '@/atoms/Title';
import LoadingImage from '@/molecules/LoadingImage';
import MarkdownLink from '@/molecules/MarkdownLink';

type Props = {
  content: string;
};

const Markdown = ({ content }: Props) => {
  return (
    <ReactMarkdown
      components={{
        code({ inline, className, children }) {
          const match = /language-(\w+)/.exec(className || '');

          if (!inline && match) {
            return (
              <CodeBlock
                value={String(children).replace(/\n$/, '')}
                language={match[1]}
              />
            );
          }

          if (inline) {
            return <InlineCode text={String(children).replace(/\n$/, '')} />;
          }

          // NOTE: どの条件にも一致しない時に null を返さないとエラーを起こす
          return null;
        },
        img({ src, alt }) {
          if (!src) return null;

          return <LoadingImage src={src} alt={alt} />;
        },
        p({ children }) {
          return (
            <ContentBox marginTopSize="20px">
              <TextBox>{children}</TextBox>
            </ContentBox>
          );
        },
        ul({ children }) {
          return (
            <ContentBox marginTopSize="20px">
              <TextList>{children}</TextList>
            </ContentBox>
          );
        },
        li({ children }) {
          return <TextItem text={String(children).replace(/\n$/, '')} />;
        },
        h2({ children }) {
          return (
            <ContentBox marginTopSize="40px">
              <Title text={String(children).replace(/\n$/, '')} rank="h2" />
            </ContentBox>
          );
        },
        h3({ children }) {
          return (
            <ContentBox marginTopSize="40px">
              <Title text={String(children).replace(/\n$/, '')} rank="h3" />
            </ContentBox>
          );
        },
        h4({ children }) {
          return (
            <ContentBox marginTopSize="40px">
              <Title text={String(children).replace(/\n$/, '')} rank="h4" />
            </ContentBox>
          );
        },
        a({ href = '/', children }) {
          const icon = {
            fileName: 'open_in_new_red_24dp.svg',
            alt: '外部リンク',
            size: '16',
            sideMargin: '4',
          } as const;

          return (
            <MarkdownLink linkPath={href} icon={icon}>
              {children}
            </MarkdownLink>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default Markdown;
