import { InferGetStaticPropsType } from 'next';
import { VFC } from 'react';

import Text from '@/atoms/Text';

type PostTitleDate = {
  id: string;
  title: string;
  release: boolean;
  createDate: string;
};

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.API_ENDPOINT}/get/titlelist`);
  const posts: PostTitleDate[] = await response.json();

  return {
    props: {
      posts,
    },
  };
};

const Top: VFC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  return (
    <div>
      {posts.map((post) => (
        <Text key={post.id} text={post.title} />
      ))}
    </div>
  );
};

export default Top;
