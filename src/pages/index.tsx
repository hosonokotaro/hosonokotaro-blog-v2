import { InferGetStaticPropsType } from 'next';
import { VFC } from 'react';

import TextItem from '@/atoms/TextItem';
import TextList from '@/atoms/TextList';

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
    <TextList>
      {posts.map(({ id, title }) => (
        <TextItem key={id} text={title} />
      ))}
    </TextList>
  );
};

export default Top;
