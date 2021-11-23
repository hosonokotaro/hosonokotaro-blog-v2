import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { VFC } from 'react';
import styled from 'styled-components';

import ContentBox from '@/atoms/ContentBox';
import Footer from '@/atoms/Footer';
import PageLayout from '@/atoms/PageLayout';
import Title from '@/atoms/Title';
import Header from '@/organisms/Header';
import getDate from '~/utility/getDate';

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
    <>
      <Header />
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
      <Footer year={getDate('year')} />
    </>
  );
};

export default Top;

const Date = styled.div`
  margin-top: 12px;
  font-size: 1rem;
`;
