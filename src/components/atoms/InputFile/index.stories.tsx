import { Meta, StoryObj } from '@storybook/react';

import InputFile from './';

const meta: Meta<typeof InputFile> = {
  component: InputFile,
  argTypes: {
    handleChange: { action: 'file を選択する為に使う' },
  },
};

export default meta;

type Story = StoryObj<typeof InputFile>;

export const Default: Story = {};
