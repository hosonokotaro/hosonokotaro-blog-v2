import { GetStaticPaths, GetStaticProps } from 'next';
import Script from 'next/script';

import Anchor from '@/atoms/Anchor';
import ContentBox from '@/atoms/ContentBox';
import PageLayout from '@/atoms/PageLayout';
import Title from '@/atoms/Title';
import Markdown from '@/organisms/Markdown';
import { Article } from '~/entity/api';
import { formatDate } from '~/useCase/createDateText';
import getPost from '~/useCase/getPost';
import getTitleList from '~/useCase/getTitleList';
import useGoogleAnalytics from '~/useCase/useGoogleAnalytics';

type Props = Article;

// NOTE: Page list を取得して、build 時に静的ファイルを生成する
export const getStaticPaths: GetStaticPaths = async () => {
  const titleList = await getTitleList(false);

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
  const { id } = context.params as unknown as Props;
  const post = await getPost(id);

  if (!post) {
    return {
      notFound: true,
    };
  }

  // getPostの戻り値がArticleかどうかを確認する型ガード
  const isArticle = (data: unknown): data is Article => {
    return !!(
      data &&
      typeof data === 'object' &&
      data !== null &&
      'title' in data &&
      'content' in data
    );
  };

  if (!isArticle(post)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...post,
      articleMeta: {
        title: post.title,
      },
    },
    revalidate: 10,
  };
};

const Post = ({ id, title, createDate, content }: Props) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${process.env.NEXT_PUBLIC_BASE_URL}/${id}`,
    },
    headline: `${title}`,
    image: {
      '@type': 'ImageObject',
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/static/media/og.png`,
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

  useGoogleAnalytics();

  return (
    <>
      <Script id="json-ld" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
      <PageLayout as="section">
        <Title text={title} />
        <ContentBox marginTopSize="20px">{formatDate(createDate)}</ContentBox>
        <ContentBox marginTopSize="80px">
          <Markdown content={content} />
        </ContentBox>
        <ContentBox marginTopSize="80px">
          <Anchor linkPath="/">新着記事へ</Anchor>
        </ContentBox>
      </PageLayout>
    </>
  );
};

export default Post;
