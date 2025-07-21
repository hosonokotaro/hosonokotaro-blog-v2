import ClientPage from '~/app/client-page';
import getTitleList from '~/useCase/getTitleList';

export const revalidate = 10;

export default async function Home() {
  const titleList = await getTitleList(false);

  return <ClientPage titleList={titleList} />;
}
