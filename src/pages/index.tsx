import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { VFC } from 'react';

import ContentBox from '@/atoms/ContentBox';
import PageLayout from '@/atoms/PageLayout';
import Title from '@/atoms/Title';
import Layout from '@/layout';

import { Date } from './StyledIndex';

type TitleDate = {
  id: string;
  title: string;
  release: boolean;
  createDate: string;
};

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.API_ENDPOINT}/get/titlelist`);
  const titleDateList: TitleDate[] = await response.json();

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
            <Date>{createDate}</Date>
          </ContentBox>
        ))}
      </PageLayout>
    </Layout>
  );
};

export default Top;
