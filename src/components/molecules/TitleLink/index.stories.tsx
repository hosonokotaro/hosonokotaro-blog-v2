import { Meta, StoryObj } from '@storybook/react';

import TitleLink from './';

const meta: Meta<typeof TitleLink> = {
  component: TitleLink,
  argTypes: {
    marginTopSize: {
      options: ['0px', '10px', '20px', '40px', '80px'],
      control: { type: 'radio' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TitleLink>;

export const Default: Story = {
  args: {
    postId: 'testid',
    title: 'testtitle',
    released: true,
    createDate: 1634656164684,
    marginTopSize: '40px',
  },
};
