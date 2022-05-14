import { InferGetStaticPropsType } from 'next';
import { VFC } from 'react';

import Anchor from '@/atoms/Anchor';
import ContentBox from '@/atoms/ContentBox';
import PageLayout from '@/atoms/PageLayout';
import Layout from '@/layout';
import TitleList from '@/organisms/TitleList';
import getTitleList from '~/useCase/getTitleList';

export const getStaticProps = async () => {
  const archiveTitleList = await getTitleList(true);

  return {
    props: {
      archiveTitleList,
    },
    revalidate: 10,
  };
};

const Archive: VFC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  archiveTitleList,
}) => {
  return (
    <Layout title="過去の記事" pagePath="/archive">
      <PageLayout tagName="article">
        <TitleList
          titleName="過去の記事"
          titleList={archiveTitleList}
          listMarginTop="80px"
        />
        <ContentBox marginTopSize="80px">
          <Anchor linkPath="/">新着記事へ</Anchor>
        </ContentBox>
      </PageLayout>
    </Layout>
  );
};

export default Archive;
