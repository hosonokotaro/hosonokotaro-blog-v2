import Link from 'next/link';
import { VFC } from 'react';

import ContentBox from '@/atoms/ContentBox';
import Spinner from '@/atoms/Spinner';
import Title from '@/atoms/Title';

interface Post {
  id: string;
  title: string;
  release: boolean;
  createDate: string;
}

interface Props {
  postList?: Post[];
}

const EditPostList: VFC<Props> = ({ postList }) => {
  return (
    <section>
      <Title text="投稿された記事一覧" />
      {postList &&
        postList.map(({ id, title, release, createDate }) => (
          <ContentBox key={id} marginTopSize="40px">
            <div>
              {!release && <span>【非公開】</span>}
              <Link href={`/edit/${id}`}>
                <a>{title}</a>
              </Link>
            </div>
            <ContentBox marginTopSize="10px">
              <div>作成日時: {createDate}</div>
              <div>id: {id}</div>
            </ContentBox>
          </ContentBox>
        ))}
      {!postList && <Spinner />}
    </section>
  );
};

export default EditPostList;
