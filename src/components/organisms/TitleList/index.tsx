import { VFC } from 'react';

import ContentBox from '@/atoms/ContentBox';
import Title from '@/atoms/Title';
import TitleLink from '@/molecules/TitleLink';
import type { TitleDate } from '~/services/getTitleList';

type Props = {
  titleName?: string;
  titleList: TitleDate[] | undefined;
  isEditPost?: boolean;
};

const TitleList: VFC<Props> = ({
  titleName = '記事一覧',
  titleList,
  isEditPost = false,
}) => {
  return (
    <ContentBox marginTopSize="40px" tagName="section">
      <Title text={titleName} />
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
  );
};

export default TitleList;
