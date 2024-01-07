import { Meta, StoryObj } from '@storybook/react';

import ContentBox from '@/atoms/ContentBox';

const meta: Meta<typeof ContentBox> = {
  component: ContentBox,
  argTypes: {
    marginTopSize: {
      options: ['0px', '10px', '20px', '40px', '80px'],
      control: { type: 'select' },
    },
    textAlign: {
      options: ['left', 'center', 'right'],
      control: { type: 'radio' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ContentBox>;

export const Default: Story = {
  args: {
    children: '何らかの内容が入ります',
    marginTopSize: '0px',
    textAlign: 'left',
  },
};
