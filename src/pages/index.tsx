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
  const titleDateList = await getTitleList();

  return {
    props: {
      titleDateList,
    },
  };
};

const Top: VFC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  titleDateList,
}) => {
  return (
    <Layout>
      <PageLayout tagName="article">
        <Title text="記事一覧" />
        {titleDateList.map(({ id, title, createDate }) => (
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
