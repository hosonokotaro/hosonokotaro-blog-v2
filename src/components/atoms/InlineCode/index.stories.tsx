import { Meta, StoryObj } from '@storybook/react';

import InlineCode from './';

const meta: Meta<typeof InlineCode> = {
  component: InlineCode,
};

export default meta;

type Story = StoryObj<typeof InlineCode>;

export const Default: Story = {
  args: {
    text: 'inline code',
  },
};
