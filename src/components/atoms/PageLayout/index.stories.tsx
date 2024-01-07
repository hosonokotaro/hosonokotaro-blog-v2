import { Meta, StoryObj } from '@storybook/react';

import PageLayout from './';

const meta: Meta<typeof PageLayout> = {
  component: PageLayout,
  argTypes: {
    as: {
      options: ['div', 'article', 'section'],
      control: { type: 'radio' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof PageLayout>;

export const Default: Story = {
  args: {
    as: 'div',
    children: 'Content',
  },
};
