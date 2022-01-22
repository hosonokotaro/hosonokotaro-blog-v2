import { InferGetStaticPropsType } from 'next';
import { VFC } from 'react';

import Anchor from '@/atoms/Anchor';
import ContentBox from '@/atoms/ContentBox';
import PageLayout from '@/atoms/PageLayout';
import Layout from '@/layout';
import TitleList from '@/organisms/TitleList';
import getTitleList from '~/useCase/getTitleList';

export const getStaticProps = async () => {
  const titleList = await getTitleList(false, false);

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
        <TitleList titleList={titleList} listMarginTop="80px" />
        <ContentBox marginTopSize="80px">
          <Anchor linkPath="/archive">過去の記事一覧へ</Anchor>
        </ContentBox>
      </PageLayout>
    </Layout>
  );
};

export default Top;
