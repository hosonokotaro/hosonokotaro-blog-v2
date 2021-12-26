import { ChangeEvent, VFC } from 'react';

import Button from '@/atoms/Button';
import ContentBox from '@/atoms/ContentBox';
import InputCheckBox from '@/atoms/InputCheckBox';
import TextBox from '@/atoms/TextBox';
import TextLabel from '@/atoms/TextLabel';

type Props = {
  id: string;
  createDate: string;
  released: boolean;
  draftRelease: boolean;
  releaseChanged: (event: ChangeEvent<HTMLInputElement>) => void;
  updatePost: () => Promise<void>;
  deletePost: () => Promise<void>;
};

const PostStatus: VFC<Props> = ({
  id,
  createDate,
  released,
  draftRelease,
  releaseChanged,
  updatePost,
  deletePost,
}) => {
  return (
    <ContentBox marginTopSize="40px" isBoxCenter isCard>
      <ContentBox>
        <TextLabel text="公開フラグ" htmlFor={`edit-release-${id}`} />
        <InputCheckBox
          id={`edit-release-${id}`}
          name={`edit-release-${id}`}
          checked={draftRelease}
          handleChange={releaseChanged}
        />
      </ContentBox>
      <ContentBox marginTopSize="20px" isBetween>
        <Button text="この記事を更新する" handleClick={updatePost} />
        <Button text="この記事を削除する" handleClick={deletePost} attention />
      </ContentBox>
      <ContentBox marginTopSize="20px">
        <TextBox>
          記事作成日時: {createDate}
          <br />
          id: {id}
          <br />
          現在の公開ステータス: {released ? '公開' : '非公開'}
        </TextBox>
      </ContentBox>
    </ContentBox>
  );
};

export default PostStatus;
