import { VFC } from 'react';

import Button from '@/atoms/Button';
import ContentBox from '@/atoms/ContentBox';
import TextBox from '@/atoms/TextBox';

type Props = {
  userId: string;
  login: () => void;
  logout: () => void;
};

const Login: VFC<Props> = ({ userId, login, logout }) => {
  return (
    <ContentBox textAlign="center">
      {userId && <Button text="ログアウトする" handleClick={logout} />}
      {!userId && <Button text="ログインする" handleClick={login} />}
      <ContentBox marginTopSize="20px" textAlign="center">
        <TextBox>{userId ? `uid: ${userId}` : 'No login'}</TextBox>
      </ContentBox>
    </ContentBox>
  );
};

export default Login;
