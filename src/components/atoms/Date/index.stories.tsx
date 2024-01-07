import { Meta, StoryObj } from '@storybook/react';

import Date from './';

const meta: Meta<typeof Date> = {
  component: Date,
};

export default meta;

type Story = StoryObj<typeof Date>;

export const Default: Story = {
  args: {
    text: '2021',
  },
};
