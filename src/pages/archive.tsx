import { InferGetStaticPropsType } from 'next';

import Anchor from '@/atoms/Anchor';
import ContentBox from '@/atoms/ContentBox';
import PageLayout from '@/atoms/PageLayout';
import TitleList from '@/organisms/TitleList';
import getTitleList from '~/useCase/getTitleList';
import useGoogleAnalytics from '~/useCase/useGoogleAnalytics';

export const getStaticProps = async () => {
  const archiveTitleList = await getTitleList(true);

  return {
    props: {
      archiveTitleList,
    },
    revalidate: 10,
  };
};

const pageTitle = '過去の記事';

const Archive = ({
  archiveTitleList,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  useGoogleAnalytics();

  return (
    <PageLayout as="article">
      <TitleList
        titleName={pageTitle}
        titleList={archiveTitleList}
        listMarginTop="80px"
      />
      <ContentBox marginTopSize="80px">
        <Anchor linkPath="/">新着記事へ</Anchor>
      </ContentBox>
    </PageLayout>
  );
};

export default Archive;
