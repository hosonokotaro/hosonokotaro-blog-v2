import { Meta, StoryObj } from '@storybook/react';

import TextLabel from './';

const meta: Meta<typeof TextLabel> = {
  component: TextLabel,
  argTypes: {
    as: {
      options: ['label', 'span'],
      control: { type: 'radio' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextLabel>;

export const Default: Story = {
  args: {
    text: 'label',
    htmlFor: 'input',
    as: 'label',
  },
};
