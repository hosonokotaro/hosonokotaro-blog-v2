import { useRouter } from 'next/router';
import { VFC } from 'react';

const Post: VFC = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>Post: {id}</div>;
};

export default Post;
