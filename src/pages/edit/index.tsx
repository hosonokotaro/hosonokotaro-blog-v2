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
import useTitleList from '~/customHooks/useTitleList';

const Edit: VFC = () => {
  const { idToken, login, logout, userId } = useSession();
  const titleList = useTitleList(idToken);

  return (
    <>
      <Layout title="Edit" isPrivate>
        <PageLayout tagName="article">
          <Title text="全記事一覧" />
          {titleList.map(({ id, title, createDate }) => (
            <ContentBox key={id} marginTopSize="40px">
              <Link href={`/${id}`}>
                <a>
                  <Title rank="span" text={title} />
                </a>
              </Link>
              <Date text={createDate} />
            </ContentBox>
          ))}
          {!titleList.length && (
            <ContentBox marginTopSize="40px">
              <ErrorMessage text="記事一覧が取得できません" />
            </ContentBox>
          )}
        </PageLayout>
      </Layout>
      <ContentBox textAlign="center">
        {userId && <Button text="ログアウトする" handleClick={logout} />}
        {!userId && <Button text="ログインする" handleClick={login} />}
        <ContentBox marginTopSize="20px" textAlign="center">
          <TextBox>{userId ? `uid: ${userId}` : 'No login'}</TextBox>
        </ContentBox>
      </ContentBox>
    </>
  );
};

export default Edit;
