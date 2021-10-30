import Message from '@/atoms/Message';

const HomePage = () => {
  console.log(process.env.NEXT_PUBLIC_DB_KEY);

  return (
    <div>
      <Message text="ペコー" />
      <div>Welcome to Next.js!</div>
    </div>
  );
};

export default HomePage;
