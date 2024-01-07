import { Meta, StoryObj } from '@storybook/react';

import ErrorMessage from './';

const meta: Meta<typeof ErrorMessage> = {
  component: ErrorMessage,
};

export default meta;

type Story = StoryObj<typeof ErrorMessage>;

export const Default: Story = {
  args: {
    text: 'Something went wrong. Please try again.',
  },
};
