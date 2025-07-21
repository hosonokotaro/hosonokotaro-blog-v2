'use client';

import Script from 'next/script';

import Anchor from '@/atoms/Anchor';
import ContentBox from '@/atoms/ContentBox';
import PageLayout from '@/atoms/PageLayout';
import Title from '@/atoms/Title';
import Markdown from '@/organisms/Markdown';
import { Article } from '~/entity/api';
import { formatDate } from '~/useCase/createDateText';
import useGoogleAnalytics from '~/useCase/useGoogleAnalytics';

export default function PostClientPage({
  id,
  title,
  createDate,
  content,
}: Article) {
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
}
