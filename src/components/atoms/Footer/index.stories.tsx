import { Meta, StoryObj } from '@storybook/react';

import Footer from './';

const meta: Meta<typeof Footer> = {
  component: Footer,
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    year: '2021',
  },
};
