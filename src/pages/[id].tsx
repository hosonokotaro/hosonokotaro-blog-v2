import { GetStaticPaths, GetStaticProps } from 'next';
import Script from 'next/script';
import { VFC } from 'react';

import Anchor from '@/atoms/Anchor';
import ContentBox from '@/atoms/ContentBox';
import PageLayout from '@/atoms/PageLayout';
import Title from '@/atoms/Title';
import Layout from '@/layout';
import Markdown from '@/organisms/Markdown';
import getPost, { Post as PostType } from '~/services/getPost';
import getTitleList from '~/services/getTitleList';
import formatDate from '~/utility/formatDate';

// NOTE: Page list を取得して、build 時に静的ファイルを生成する
export const getStaticPaths: GetStaticPaths = async () => {
  const titleList = await getTitleList();

  if (!titleList) {
    return {
      paths: [],
      fallback: false,
    };
  }

  return {
    paths: titleList.map(({ id }) => ({ params: { id } })),
    fallback: 'blocking',
  };
};

// NOTE: Page を取得して、build 時に静的ファイルを生成する
export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as unknown as PostType;
  const post = await getPost(id);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...post,
    },
    revalidate: 10,
  };
};

const Post: VFC<PostType> = ({ id, title, createDate, content }) => {
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
      <Layout title={title} pagePath={`/${id}`}>
        <PageLayout tagName="section">
          <Title text={title} />
          <ContentBox marginTopSize="20px">{formatDate(createDate)}</ContentBox>
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
