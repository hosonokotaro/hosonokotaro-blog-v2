import { Meta, StoryObj } from '@storybook/react';

import InputCheckBox from './';

const meta: Meta<typeof InputCheckBox> = {
  component: InputCheckBox,
  argTypes: {
    handleChange: { action: 'state を更新する為に使う' },
  },
};

export default meta;

type Story = StoryObj<typeof InputCheckBox>;

export const Default: Story = {
  args: {
    id: 'id',
    name: 'name',
  },
};
