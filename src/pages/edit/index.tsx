import { VFC } from 'react';

import ContentBox from '@/atoms/ContentBox';
import ErrorMessage from '@/atoms/ErrorMessage';
import PageLayout from '@/atoms/PageLayout';
import Spinner from '@/atoms/Spinner';
import Layout from '@/layout';
import CreatePost from '@/organisms/CreatePost';
import Login from '@/organisms/Login';
import TitleList from '@/organisms/TitleList';
import useCreatePost from '~/customHooks/useCreatePost';
import useSession from '~/customHooks/useSession';
import useTitleList from '~/customHooks/useTitleList';

const Edit: VFC = () => {
  const { idToken, login, logout, userId } = useSession();
  const { title, hasTitle, onTitleChanged, handleSubmit } = useCreatePost();
  const { titleList, isLoading, isError } = useTitleList(idToken);

  return (
    <>
      <Layout title="全記事" linkPath="/edit" isPrivate>
        <PageLayout tagName="article">
          <CreatePost
            title={title}
            hasTitle={hasTitle}
            onTitleChanged={onTitleChanged}
            handleSubmit={handleSubmit}
          />
          <TitleList titleList={titleList} contentMarginTop="80px" isEditPost />
          {isLoading && (
            <ContentBox marginTopSize="40px">
              <Spinner />
            </ContentBox>
          )}
          {isError && (
            <ContentBox marginTopSize="40px">
              <ErrorMessage text="記事が取得できません" />
            </ContentBox>
          )}
        </PageLayout>
      </Layout>
      <Login userId={userId} login={login} logout={logout} />
    </>
  );
};

export default Edit;
