import { Meta, StoryObj } from '@storybook/react';

import Anchor from './';

const meta: Meta<typeof Anchor> = {
  component: Anchor,
};

export default meta;

type Story = StoryObj<typeof Anchor>;

export const Default: Story = {
  args: {
    children: 'Anchor',
    linkPath: 'https://www.google.com',
  },
};
