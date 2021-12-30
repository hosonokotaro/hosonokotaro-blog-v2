import Link from 'next/link';
import { VFC } from 'react';

import ContentBox from '@/atoms/ContentBox';
import Date from '@/atoms/Date';
import Title from '@/atoms/Title';
import formatDate from '~/utility/formatDate';

type Props = {
  postId: string;
  title: string;
  release: boolean;
  createDate: string;
  isEditPost?: boolean;
};

const TitleLink: VFC<Props> = ({
  postId,
  title,
  release,
  createDate,
  isEditPost = false,
}) => {
  return (
    <ContentBox marginTopSize="40px">
      <Link href={`${isEditPost ? `/edit` : ``}/${postId}`}>
        <a>
          <Title rank="span" text={`${release ? '' : '【非公開】'}${title}`} />
        </a>
      </Link>
      <Date text={formatDate(createDate)} />
    </ContentBox>
  );
};

export default TitleLink;
