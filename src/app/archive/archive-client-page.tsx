'use client';

import Anchor from '@/atoms/Anchor';
import ContentBox from '@/atoms/ContentBox';
import PageLayout from '@/atoms/PageLayout';
import TitleList from '@/organisms/TitleList';
import { TitleDate } from '~/entity/api';
import useGoogleAnalytics from '~/useCase/useGoogleAnalytics';

interface ArchiveClientPageProps {
  archiveTitleList: TitleDate[] | undefined;
}

const pageTitle = '過去の記事';

export default function ArchiveClientPage({
  archiveTitleList,
}: ArchiveClientPageProps) {
  useGoogleAnalytics();

  return (
    <PageLayout as="article">
      <TitleList
        titleName={pageTitle}
        titleList={archiveTitleList || undefined}
        listMarginTop="80px"
      />
      <ContentBox marginTopSize="80px">
        <Anchor linkPath="/">新着記事へ</Anchor>
      </ContentBox>
    </PageLayout>
  );
}
