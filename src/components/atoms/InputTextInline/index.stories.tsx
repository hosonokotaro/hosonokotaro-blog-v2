import { Meta, StoryObj } from '@storybook/react';

import InputTextInline from './';

const meta: Meta<typeof InputTextInline> = {
  component: InputTextInline,
  argTypes: {
    handleChange: { action: 'state を更新する為に使う' },
  },
};

export default meta;

type story = StoryObj<typeof InputTextInline>;

export const Default: story = {
  args: {
    id: 'id',
    name: 'name',
    defaultValue: 'input text',
  },
};
