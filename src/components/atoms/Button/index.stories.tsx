import { Meta, StoryObj } from '@storybook/react';

import Button from './';

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    handleClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    disabled: false,
    text: 'button',
    attention: false,
  },
};
