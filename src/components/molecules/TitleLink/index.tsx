import Link from 'next/link';
import { ComponentProps, VFC } from 'react';

import ContentBox from '@/atoms/ContentBox';
import Date from '@/atoms/Date';
import Title from '@/atoms/Title';
import formatDate from '~/utility/formatDate';

type Props = {
  postId: string;
  title: string;
  released: boolean;
  createDate: string;
  isEditPost?: boolean;
  marginTopSize: ComponentProps<typeof ContentBox>['marginTopSize'];
};

const TitleLink: VFC<Props> = ({
  postId,
  title,
  released,
  createDate,
  isEditPost = false,
  marginTopSize,
}) => {
  return (
    <>
      {released && !isEditPost && (
        <ContentBox marginTopSize={marginTopSize}>
          <Link href={`/${postId}`}>
            <a>
              <Title rank="span" text={title} />
            </a>
          </Link>
          <Date text={formatDate(createDate)} />
        </ContentBox>
      )}
      {isEditPost && (
        <ContentBox marginTopSize={marginTopSize}>
          <Link href={`/edit/${postId}`}>
            <a>
              <Title
                rank="span"
                text={`${released ? '' : '【非公開】'}${title}`}
              />
            </a>
          </Link>
          <Date text={formatDate(createDate)} />
        </ContentBox>
      )}
    </>
  );
};

export default TitleLink;
