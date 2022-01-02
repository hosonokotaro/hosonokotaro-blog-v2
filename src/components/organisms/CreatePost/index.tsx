import { VFC } from 'react';
import { ChangeEvent } from 'react';

import Button from '@/atoms/Button';
import ContentBox from '@/atoms/ContentBox';
import InputTextInline from '@/atoms/InputTextInline';
import TextLabel from '@/atoms/TextLabel';
import Title from '@/atoms/Title';

type Props = {
  title: string;
  hasTitle: boolean;
  onTitleChanged: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
};

const CreatePost: VFC<Props> = ({
  title,
  hasTitle,
  onTitleChanged,
  handleSubmit,
}) => {
  const groupName = 'postTitle';

  return (
    <ContentBox tagName="section">
      <Title text="記事の新規作成" />
      <ContentBox marginTopSize="20px">
        <form onSubmit={(event) => event.preventDefault()}>
          <TextLabel htmlFor={groupName} text="タイトル" />
          <InputTextInline
            id={groupName}
            name={groupName}
            defaultValue={title}
            handleChange={onTitleChanged}
          />
          <ContentBox marginTopSize="20px">
            <Button
              text="記事を準備する"
              handleClick={handleSubmit}
              disabled={!hasTitle}
            />
          </ContentBox>
        </form>
      </ContentBox>
    </ContentBox>
  );
};

export default CreatePost;
