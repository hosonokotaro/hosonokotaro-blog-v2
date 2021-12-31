import { useRouter } from 'next/router';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';

import { getIdToken } from '~/services/authentication';
import deletePostService from '~/services/deletePost';
import type { Post } from '~/services/getPost';
import updatePostService from '~/services/updatePost';

// NOTE: props が undefined の場合があるため、分割代入が使用できない
const useEditPost = (props: Post | undefined) => {
  const [draftPost, setDraftPost] = useState<Post>();

  const router = useRouter();

  const titleChanged = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!draftPost) return;

      setDraftPost({
        ...draftPost,
        title: event.target.value,
      });
    },
    [draftPost]
  );

  const contentChanged = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      if (!draftPost) return;

      setDraftPost({
        ...draftPost,
        content: event.target.value,
      });
    },
    [draftPost]
  );

  const releaseChanged = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!draftPost) return;

      setDraftPost({
        ...draftPost,
        release: event.target.checked,
      });
    },
    [draftPost]
  );

  const updatePost = useCallback(async () => {
    if (!draftPost) return;

    const { id } = draftPost;
    const idToken = await getIdToken();

    if (!idToken) return;

    const updateConfirm = confirm('更新します');

    if (!updateConfirm) return;

    await updatePostService(id, idToken, {
      title: draftPost.title,
      content: draftPost.content,
      release: draftPost.release,
    });

    // NOTE: もしかしたら、Reload する必要があるかもしれない
    router.push('/edit');
  }, [draftPost, router]);

  const deletePost = useCallback(async () => {
    if (!draftPost) return;

    const { id } = draftPost;
    const idToken = await getIdToken();

    if (!idToken) return;

    // FIXME: 記事を削除したときに画像を削除するためには、全ての画像を一つずつ全て削除しないといけない
    const updateConfirm = confirm('削除します');

    if (!updateConfirm) return;

    await deletePostService(id, idToken);

    // NOTE: もしかしたら、Reload する必要があるかもしれない
    router.push('/edit');
  }, [draftPost, router]);

  useEffect(() => {
    if (!props) return;

    setDraftPost(props);
  }, [props]);

  return {
    draftPost,
    titleChanged,
    contentChanged,
    releaseChanged,
    updatePost,
    deletePost,
  };
};

export default useEditPost;
