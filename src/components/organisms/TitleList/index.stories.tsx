import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';

import TitleList from './';

export default {
  component: TitleList,
  title: 'components/organisms/TitleList',
  argTypes: {
    contentMarginTop: {
      options: ['0px', '10px', '20px', '40px', '80px'],
      control: { type: 'select' },
    },
    listMarginTop: {
      options: ['0px', '10px', '20px', '40px', '80px'],
      control: { type: 'select' },
    },
  },
} as Meta;

type Props = ComponentProps<typeof TitleList>;

const Template: Story<Props> = (args) => {
  return <TitleList {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  titleList: [
    {
      id: 'PrivatePostData',
      title: '準備中の記事',
      release: false,
      createDate: '1640872405123',
    },
    {
      id: 'FynE3JpxYWPSqboszEA2',
      title: 'SWR の useSWRImmutable を使う',
      release: true,
      createDate: '1634656164684',
    },
    {
      id: 'YrtBam2iH0XUNB4ucQVU',
      title: 'ブログをリリースしました',
      release: true,
      createDate: '1599910367482',
    },
  ],
  isEditPost: false,
  contentMarginTop: '0px',
  listMarginTop: '0px',
};
