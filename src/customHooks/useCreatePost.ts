import { ChangeEvent, useCallback, useMemo, useState } from 'react';

import { getIdToken } from '~/services/authentication';
import createPost from '~/services/createPost';

const useCreatePost = () => {
  const [title, setTitle] = useState<string>('');

  const hasTitle = useMemo(() => Boolean(title), [title]);

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
  }, [title, hasTitle]);

  return {
    title,
    hasTitle,
    onTitleChanged,
    handleSubmit,
  };
};

export default useCreatePost;
