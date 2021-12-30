import Link from 'next/link';
import { VFC } from 'react';

import ContentBox from '@/atoms/ContentBox';
import Date from '@/atoms/Date';
import ErrorMessage from '@/atoms/ErrorMessage';
import PageLayout from '@/atoms/PageLayout';
import Spinner from '@/atoms/Spinner';
import Title from '@/atoms/Title';
import Layout from '@/layout';
import Login from '@/organisms/Login';
import useSession from '~/customHooks/useSession';
import useTitleList from '~/customHooks/useTitleList';
import formatDate from '~/utility/formatDate';

const Edit: VFC = () => {
  const { idToken, login, logout, userId } = useSession();
  const { titleList, isLoading, isError } = useTitleList(idToken);

  return (
    <>
      <Layout title="全記事一覧" linkPath="/edit" isPrivate>
        <PageLayout tagName="article">
          <Title text="全記事一覧" />
          {titleList &&
            titleList.map(({ id, title, createDate, release }) => (
              <ContentBox key={id} marginTopSize="40px">
                <Link href={`/edit/${id}`}>
                  <a>
                    <Title
                      rank="span"
                      text={`${release ? '' : '【非公開】'}` + title}
                    />
                  </a>
                </Link>
                <Date text={formatDate(createDate)} />
              </ContentBox>
            ))}
          {isLoading && (
            <ContentBox marginTopSize="40px">
              <Spinner />
            </ContentBox>
          )}
          {isError && (
            <ContentBox marginTopSize="40px">
              <ErrorMessage text="記事一覧が取得できません" />
            </ContentBox>
          )}
        </PageLayout>
      </Layout>
      <Login userId={userId} login={login} logout={logout} />
    </>
  );
};

export default Edit;
