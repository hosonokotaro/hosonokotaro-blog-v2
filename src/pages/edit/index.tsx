import Link from 'next/link';
import { useRouter } from 'next/router';
import { VFC } from 'react';

const Edit: VFC = () => {
  const router = useRouter();

  return (
    <div>
      <div>Edit page.</div>
      <Link href="/edit/test">
        <a>Link</a>
      </Link>
      <div>Top page.</div>
      {/* NOTE: event で 遷移する例 */}
      <button onClick={() => router.push('/')}>onClick to Top</button>
    </div>
  );
};

export default Edit;
