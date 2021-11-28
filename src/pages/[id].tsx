import { GetStaticPaths, GetStaticProps } from 'next';
import Script from 'next/script';
import { VFC } from 'react';

import Anchor from '@/atoms/Anchor';
import ContentBox from '@/atoms/ContentBox';
import PageLayout from '@/atoms/PageLayout';
import Title from '@/atoms/Title';
import Layout from '@/layout';
import Markdown from '@/organisms/Markdown';

type TitleDate = {
  id: string;
  title: string;
  release: boolean;
  createDate: string;
};

// NOTE: Page list を取得して、build 時に静的ファイルを生成する
export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${process.env.API_ENDPOINT}/get/titlelist`);
  const titleDateList: TitleDate[] = await response.json();

  return {
    paths: titleDateList.map(({ id }) => ({ params: { id } })),
    fallback: false,
  };
};

type Post = {
  id: string;
  title: string;
  content: string;
  release: boolean;
  createDate: string;
};

// NOTE: Page を取得して、build 時に静的ファイルを生成する
export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as unknown as Post;
  const response = await fetch(`${process.env.API_ENDPOINT}/get/post/${id}`);
  const post: Post = await response.json();

  return {
    props: {
      ...post,
    },
  };
};

const Post: VFC<Post> = ({ id, title, createDate, content }) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://techblog.hosonokotaro.jp/${id}`,
    },
    headline: `${title}`,
    image: {
      '@type': 'ImageObject',
      url: 'https://techblog.hosonokotaro.jp/static/media/og.png',
    },
    author: {
      '@type': 'Person',
      name: 'Hosono Kotaro',
      url: 'https://hosonokotaro.jp/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'HOSONOKOTARO Tech Blog',
      logo: {
        '@type': 'ImageObject',
        url: '',
      },
    },
    datePublished: createDate,
  };

  return (
    <>
      <Script id="json-ld" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
      <Layout title={title}>
        <PageLayout tagName="section">
          <Title text={title} />
          <ContentBox marginTopSize="20px">{createDate}</ContentBox>
          <ContentBox marginTopSize="80px">
            <Markdown content={content} />
          </ContentBox>
          <ContentBox marginTopSize="80px">
            <Anchor linkPath="/">記事一覧へ</Anchor>
          </ContentBox>
        </PageLayout>
      </Layout>
    </>
  );
};

export default Post;
