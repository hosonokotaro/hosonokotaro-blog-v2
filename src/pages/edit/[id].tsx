import { useRouter } from 'next/router';
import { VFC } from 'react';

const EditPost: VFC = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>EditPost: {id}</div>;
};

export default EditPost;
