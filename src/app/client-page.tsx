'use client';

import Anchor from '@/atoms/Anchor';
import ContentBox from '@/atoms/ContentBox';
import PageLayout from '@/atoms/PageLayout';
import TitleList from '@/organisms/TitleList';
import { TitleDate } from '~/entity/api';
import useGoogleAnalytics from '~/useCase/useGoogleAnalytics';

interface ClientPageProps {
  titleList: TitleDate[] | undefined;
}

export default function ClientPage({ titleList }: ClientPageProps) {
  useGoogleAnalytics();

  return (
    <PageLayout as="article">
      <TitleList titleList={titleList} listMarginTop="80px" />
      <ContentBox marginTopSize="80px">
        <Anchor linkPath="/archive">過去の記事へ</Anchor>
      </ContentBox>
    </PageLayout>
  );
}
