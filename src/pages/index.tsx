import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { VFC } from 'react';

import ContentBox from '@/atoms/ContentBox';
import Date from '@/atoms/Date';
import PageLayout from '@/atoms/PageLayout';
import Title from '@/atoms/Title';
import Layout from '@/layout';
import getTitleList from '~/services/getTitleList';

export const getStaticProps = async () => {
  const titleList = await getTitleList();

  return {
    props: {
      titleList,
    },
  };
};

const Top: VFC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  titleList,
}) => {
  return (
    <Layout>
      <PageLayout tagName="article">
        <Title text="記事一覧" />
        {titleList.map(({ id, title, createDate }) => (
          <ContentBox key={id} marginTopSize="40px">
            <Link href={`/${id}`}>
              <a>
                <Title rank="span" text={title} />
              </a>
            </Link>
            <Date text={createDate} />
          </ContentBox>
        ))}
      </PageLayout>
    </Layout>
  );
};

export default Top;
