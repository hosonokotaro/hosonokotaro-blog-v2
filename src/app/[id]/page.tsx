import { notFound } from 'next/navigation';

import PostClientPage from '~/app/[id]/post-client-page';
import { Article } from '~/entity/api';
import getPost from '~/useCase/getPost';
import getTitleList from '~/useCase/getTitleList';

export const revalidate = 10;

export async function generateStaticParams() {
  const titleList = await getTitleList(false);

  if (!titleList) {
    return [];
  }

  return titleList.map(({ id }) => ({ id }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);

  if (!post) {
    return {
      title: 'Not Found',
    };
  }

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
      title: 'Not Found',
    };
  }

  return {
    title: post.title,
    openGraph: {
      title: post.title,
      description: '技術系の記事を投稿するブログです。',
      type: 'article',
      publishedTime: post.createDate,
      authors: ['Hosono Kotaro'],
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${params.id}`,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/static/media/og.png`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
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
    notFound();
  }

  return <PostClientPage {...post} />;
}
