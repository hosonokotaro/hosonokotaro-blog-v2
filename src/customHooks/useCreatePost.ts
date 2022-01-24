import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { useSWRConfig } from 'swr';

import { getIdToken } from '~/services/authentication';
import createPost from '~/services/createPost';

const useCreatePost = () => {
  const [title, setTitle] = useState<string>('');
  const hasTitle = useMemo(() => Boolean(title), [title]);
  const { mutate } = useSWRConfig();

  const onTitleChanged = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }, []);

  const handleSubmit = useCallback(async () => {
    const idToken = await getIdToken();

    if (!hasTitle || !idToken) return;

    await createPost(idToken, {
      title,
      content: '',
      release: false,
    });

    setTitle('');

    // FIXME: 記事作成日時が API で生成されるため、ここで再検証せずには記事を更新できない
    mutate(idToken);
  }, [hasTitle, title, mutate]);

  return {
    title,
    hasTitle,
    onTitleChanged,
    handleSubmit,
  };
};

export default useCreatePost;
