import { ComponentProps, VFC } from 'react';

import ContentBox from '@/atoms/ContentBox';
import Title from '@/atoms/Title';
import TitleLink from '@/molecules/TitleLink';
import { TitleDate } from '~/entity/api';

type MarginTop = ComponentProps<typeof ContentBox>['marginTopSize'];

type Props = {
  titleName?: string;
  titleList: TitleDate[] | undefined;
  isEditPost?: boolean;
  contentMarginTop?: MarginTop;
  listMarginTop?: MarginTop;
};

const TitleList: VFC<Props> = ({
  titleName = '新着記事',
  titleList,
  isEditPost = false,
  contentMarginTop = '0px',
  listMarginTop = '0px',
}) => {
  return (
    <ContentBox tagName="section" marginTopSize={contentMarginTop}>
      <Title text={titleName} />
      <ContentBox marginTopSize={listMarginTop}>
        {titleList &&
          titleList.map(({ id, title, release, createDate }) => (
            <TitleLink
              key={id}
              postId={id}
              title={title}
              released={release}
              createDate={createDate}
              isEditPost={isEditPost}
              marginTopSize="40px"
            />
          ))}
      </ContentBox>
    </ContentBox>
  );
};

export default TitleList;
