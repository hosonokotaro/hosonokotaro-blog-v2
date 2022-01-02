import { useRouter } from 'next/router';
import { VFC } from 'react';

import ContentBox from '@/atoms/ContentBox';
import InputTextArea from '@/atoms/InputTextArea';
import InputTextInline from '@/atoms/InputTextInline';
import PageLayout from '@/atoms/PageLayout';
import Spinner from '@/atoms/Spinner';
import TextBox from '@/atoms/TextBox';
import TextLabel from '@/atoms/TextLabel';
import Title from '@/atoms/Title';
import Layout from '@/layout';
import Login from '@/organisms/Login';
import Markdown from '@/organisms/Markdown';
import PostStatus from '@/organisms/PostStatus';
import UploadImage from '@/organisms/UploadImage';
import useEditPost from '~/customHooks/useEditPost';
import usePost from '~/customHooks/usePost';
import useSession from '~/customHooks/useSession';
import useUploadFileList from '~/customHooks/useUploadFileList';
import formatDate from '~/utility/formatDate';

const EditPost: VFC = () => {
  const router = useRouter();
  const { id } = router.query;

  const { idToken, login, logout, userId } = useSession();
  const { post, isLoading, isError } = usePost(id, idToken);
  const { imagePathList, deleteImage, imageFile, setImageFile, handleUpload } =
    useUploadFileList(id);

  const {
    draftPost,
    titleChanged,
    contentChanged,
    releaseChanged,
    updatePost,
    deletePost,
  } = useEditPost(post);

  const idFix = id && !Array.isArray(id) ? id : undefined;

  return (
    <>
      <Layout title={post && post.title} linkPath="/edit" isPrivate>
        {(!idToken || isLoading) && (
          <PageLayout>
            <ContentBox marginTopSize="40px">
              <Spinner />
            </ContentBox>
          </PageLayout>
        )}
        {isError && (
          <PageLayout>
            <ContentBox textAlign="center">
              <TextBox>error</TextBox>
            </ContentBox>
          </PageLayout>
        )}
        {idToken && post && (
          <PageLayout tagName="section" isMinHeight={false}>
            <Title text="記事を編集する" />
            <ContentBox marginTopSize="20px">
              <TextLabel text="タイトル" htmlFor={`edit-title-${id}`} />
              <InputTextInline
                id={`edit-title-${id}`}
                name={`edit-title-${id}`}
                defaultValue={post.title}
                handleChange={titleChanged}
              />
            </ContentBox>
            <ContentBox marginTopSize="20px">
              <TextLabel text="本文" htmlFor={`edit-content-${id}`} />
              <InputTextArea
                id={`edit-content-${id}`}
                name={`edit-content-${id}`}
                defaultValue={post.content}
                handleChange={contentChanged}
              />
            </ContentBox>
            <UploadImage
              imagePathList={imagePathList}
              deleteImage={deleteImage}
              image={imageFile}
              callbackSetImage={setImageFile}
              handleUpload={handleUpload}
            />
          </PageLayout>
        )}
        {idToken && post && draftPost && (
          <PageLayout tagName="section" isMinHeight={false}>
            <ContentBox marginTopSize="80px">
              <Title text={draftPost.title} />
              <ContentBox marginTopSize="20px">
                {formatDate(draftPost.createDate)}
              </ContentBox>
              <ContentBox marginTopSize="80px">
                <Markdown content={draftPost.content} />
              </ContentBox>
            </ContentBox>
            <PostStatus
              postId={idFix}
              createDate={post.createDate}
              released={post.release}
              releaseChanged={releaseChanged}
              updatePost={updatePost}
              deletePost={deletePost}
            />
          </PageLayout>
        )}
      </Layout>
      <Login userId={userId} login={login} logout={logout} />
    </>
  );
};

export default EditPost;
