import { Meta, StoryObj } from '@storybook/react';

import InputTextArea from './';

const meta: Meta<typeof InputTextArea> = {
  component: InputTextArea,
  argTypes: {
    handleChange: { action: 'state を更新する為に使う' },
  },
};

export default meta;

type Story = StoryObj<typeof InputTextArea>;

export const Default: Story = {
  args: {
    id: 'id',
    name: 'name',
    defaultValue: 'input text',
  },
};
