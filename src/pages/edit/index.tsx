import Link from 'next/link';
import { VFC } from 'react';

import Button from '@/atoms/Button';
import ContentBox from '@/atoms/ContentBox';
import Date from '@/atoms/Date';
import ErrorMessage from '@/atoms/ErrorMessage';
import PageLayout from '@/atoms/PageLayout';
import TextBox from '@/atoms/TextBox';
import Title from '@/atoms/Title';
import Layout from '@/layout';
import useSession from '~/customHooks/useSession';

type TitleDate = {
  id: string;
  title: string;
  release: boolean;
  createDate: string;
};

const Edit: VFC = () => {
  const { userId, login, logout } = useSession();

  // TODO: CSR にする為に、useEditTop を実装する
  const titleDateList: TitleDate[] = [];

  return (
    <Layout title="Edit" isPrivate>
      <PageLayout tagName="article">
        <Title text="全記事一覧" />
        {titleDateList.map(({ id, title, createDate }) => (
          <ContentBox key={id} marginTopSize="40px">
            <Link href={`/${id}`}>
              <a>
                <Title rank="span" text={title} />
              </a>
            </Link>
            <Date text={createDate} />
          </ContentBox>
        ))}
        {!titleDateList.length && (
          <ContentBox marginTopSize="40px">
            <ErrorMessage text="記事一覧が取得できません" />
          </ContentBox>
        )}
      </PageLayout>
      <ContentBox textAlign="center">
        {userId && <Button text="ログアウトする" handleClick={logout} />}
        {!userId && <Button text="ログインする" handleClick={login} />}
        <ContentBox marginTopSize="20px" textAlign="center">
          <TextBox>uid: {userId}</TextBox>
        </ContentBox>
      </ContentBox>
    </Layout>
  );
};

export default Edit;
