import { Meta, StoryObj } from '@storybook/react';

import Title from './';

const meta: Meta<typeof Title> = {
  component: Title,
  argTypes: {
    as: {
      options: ['h2', 'h3', 'h4', 'span'],
      control: { type: 'radio' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    text: 'title',
    as: 'h2',
  },
};
