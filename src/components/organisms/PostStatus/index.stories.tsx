import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';

import PostStatus from './';

export default {
  component: PostStatus,
  title: 'components/organisms/PostStatus',
  argTypes: {
    updatePost: { action: 'updatePost' },
    deletePost: { action: 'deletePost' },
  },
} as Meta;

type Props = ComponentProps<typeof PostStatus>;

const Template: Story<Props> = (args) => {
  return <PostStatus {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  id: 'testid',
  createDate: '2020/01/01',
  released: false,
};
