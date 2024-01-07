import { Meta, StoryObj } from '@storybook/react';

import Icon from './';

const meta: Meta<typeof Icon> = {
  component: Icon,
  argTypes: {
    size: {
      options: ['16', '24', '32', '48'],
      control: { type: 'select' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    fillColor: 'default',
    iconName: 'OpenInNew',
    sideMargin: '0',
    size: '16',
  },
};
