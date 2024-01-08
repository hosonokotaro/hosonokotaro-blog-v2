import Link from 'next/link';
import { ComponentProps } from 'react';

import ContentBox from '@/atoms/ContentBox';
import Date from '@/atoms/Date';
import Title from '@/atoms/Title';
import { formatDate } from '~/useCase/createDateText';

type Props = {
  postId: string;
  title: string;
  released: boolean;
  createDate: number;
  isEditPost?: boolean;
  marginTopSize: ComponentProps<typeof ContentBox>['marginTopSize'];
};

const TitleLink = ({
  postId,
  title,
  released,
  createDate,
  isEditPost = false,
  marginTopSize,
}: Props) => {
  return (
    <>
      {released && !isEditPost && (
        <ContentBox marginTopSize={marginTopSize}>
          <Link href={`/${postId}`}>
            <Title as="span" text={title} />
          </Link>
          <Date text={formatDate(createDate)} />
        </ContentBox>
      )}
      {isEditPost && (
        <ContentBox marginTopSize={marginTopSize}>
          <Link href={`/edit/${postId}`}>
            <Title as="span" text={`${released ? '' : '【非公開】'}${title}`} />
          </Link>
          <Date text={formatDate(createDate)} />
        </ContentBox>
      )}
    </>
  );
};

export default TitleLink;
