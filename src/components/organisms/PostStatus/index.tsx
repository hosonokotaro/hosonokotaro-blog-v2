import { ChangeEvent, VFC } from 'react';

import Button from '@/atoms/Button';
import ContentBox from '@/atoms/ContentBox';
import InputCheckBox from '@/atoms/InputCheckBox';
import TextBox from '@/atoms/TextBox';
import TextLabel from '@/atoms/TextLabel';
import formatDate from '~/utility/formatDate';

type Props = {
  postId: string | undefined;
  createDate: string;
  released: boolean;
  releaseChanged: (event: ChangeEvent<HTMLInputElement>) => void;
  updatePost: () => Promise<void>;
  deletePost: () => Promise<void>;
};

const PostStatus: VFC<Props> = ({
  postId,
  createDate,
  released,
  releaseChanged,
  updatePost,
  deletePost,
}) => {
  return (
    <ContentBox marginTopSize="40px" isBoxCenter isCard>
      {postId && (
        <>
          <ContentBox>
            <TextLabel text="公開フラグ" htmlFor={`edit-release-${postId}`} />
            <InputCheckBox
              id={`edit-release-${postId}`}
              name={`edit-release-${postId}`}
              checked={released}
              handleChange={releaseChanged}
            />
          </ContentBox>
          <ContentBox marginTopSize="20px" isBetween>
            <Button text="この記事を更新する" handleClick={updatePost} />
            <Button
              text="この記事を削除する"
              handleClick={deletePost}
              attention
            />
          </ContentBox>
          <ContentBox marginTopSize="20px">
            <TextBox>
              記事作成日時: {formatDate(createDate)}
              <br />
              postId: {postId}
              <br />
              現在の公開ステータス: {released ? '公開' : '非公開'}
            </TextBox>
          </ContentBox>
        </>
      )}
    </ContentBox>
  );
};

export default PostStatus;
