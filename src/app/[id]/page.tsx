import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import PostClientPage from '~/app/[id]/post-client-page';
import { Article } from '~/entity/api';
import getPost from '~/useCase/getPost';
import getTitleList from '~/useCase/getTitleList';

export const revalidate = 10;

const authorName = 'Hosono Kotaro';
const ogImagePath = '/static/media/og.png';

const isArticle = (data: unknown): data is Article => {
  return !!(
    data &&
    typeof data === 'object' &&
    data !== null &&
    'title' in data &&
    'content' in data
  );
};

export async function generateStaticParams() {
  const titleList = await getTitleList(false);

  if (!titleList) {
    return [];
  }

  return titleList.map(({ id }) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const post = await getPost(params.id);

  if (!post) {
    return {
      title: 'Not Found',
    };
  }

  if (!isArticle(post)) {
    return {
      title: 'Not Found',
    };
  }

  const description = post.title;
  const path = `/${params.id}`;

  return {
    title: post.title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: post.title,
      description,
      type: 'article',
      publishedTime: new Date(post.createDate).toISOString(),
      authors: [authorName],
      url: path,
      images: [
        {
          url: ogImagePath,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@hosono_fe',
      title: post.title,
      description,
      images: [ogImagePath],
    },
  };
}

interface PostPageProps {
  params: { id: string };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPost(params.id);

  if (!post) {
    notFound();
  }

  if (!isArticle(post)) {
    notFound();
  }

  return <PostClientPage {...post} />;
}
