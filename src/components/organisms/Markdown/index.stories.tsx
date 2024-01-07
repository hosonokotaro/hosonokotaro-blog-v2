import { Meta, StoryObj } from '@storybook/react';

import Markdown from './';

const meta: Meta<typeof Markdown> = {
  component: Markdown,
};

export default meta;

type Story = StoryObj<typeof Markdown>;

export const Default: Story = {
  args: {
    content: '### Markdown をいれてください',
  },
};
