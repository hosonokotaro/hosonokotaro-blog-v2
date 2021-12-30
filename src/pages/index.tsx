import { InferGetStaticPropsType } from 'next';
import { VFC } from 'react';

import PageLayout from '@/atoms/PageLayout';
import Title from '@/atoms/Title';
import Layout from '@/layout';
import TitleLink from '@/organisms/TitleLink';
import getTitleList from '~/services/getTitleList';

export const getStaticProps = async () => {
  const titleList = await getTitleList();

  return {
    props: {
      titleList,
    },
  };
};

const Top: VFC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  titleList,
}) => {
  return (
    <Layout>
      <PageLayout tagName="article">
        <Title text="記事一覧" />
        {titleList.map(({ id, title, createDate }) => (
          <TitleLink
            key={id}
            postId={id}
            title={title}
            release
            createDate={createDate}
          />
        ))}
      </PageLayout>
    </Layout>
  );
};

export default Top;
