import { ComponentProps, ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';

import CodeBlock from '@/atoms/CodeBlock';
import ContentBox from '@/atoms/ContentBox';
import Icon from '@/atoms/Icon';
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

type IconProps = ComponentProps<typeof Icon>;

const extractTextFromChildren = (children: ReactNode): string => {
  if (typeof children === 'string') {
    return children;
  }

  if (typeof children === 'number') {
    return String(children);
  }

  if (Array.isArray(children)) {
    return children.map(extractTextFromChildren).join('');
  }

  if (children && typeof children === 'object' && 'props' in children) {
    return extractTextFromChildren(children.props.children);
  }

  return '';
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
                value={extractTextFromChildren(children)}
                language={match[1]}
              />
            );
          }

          if (inline) {
            return <InlineCode text={extractTextFromChildren(children)} />;
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
          return <TextItem text={extractTextFromChildren(children)} />;
        },
        h2({ children }) {
          return (
            <ContentBox marginTopSize="40px">
              <Title text={extractTextFromChildren(children)} as="h2" />
            </ContentBox>
          );
        },
        h3({ children }) {
          return (
            <ContentBox marginTopSize="40px">
              <Title text={extractTextFromChildren(children)} as="h3" />
            </ContentBox>
          );
        },
        h4({ children }) {
          return (
            <ContentBox marginTopSize="40px">
              <Title text={extractTextFromChildren(children)} as="h4" />
            </ContentBox>
          );
        },
        a({ href = '/', children }) {
          const icon: IconProps = {
            iconName: 'OpenInNew',
            fillColor: 'link',
            size: '16',
            sideMargin: '4',
          };

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
