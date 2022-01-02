import { InferGetStaticPropsType } from 'next';
import { VFC } from 'react';

import PageLayout from '@/atoms/PageLayout';
import Layout from '@/layout';
import TitleList from '@/organisms/TitleList';
import getTitleList from '~/services/getTitleList';

export const getStaticProps = async () => {
  const titleList = await getTitleList();

  return {
    props: {
      titleList,
    },
    revalidate: 10,
  };
};

const Top: VFC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  titleList,
}) => {
  return (
    <Layout>
      <PageLayout tagName="article">
        <TitleList titleList={titleList} />
      </PageLayout>
    </Layout>
  );
};

export default Top;
