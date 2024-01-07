import { Meta, StoryObj } from '@storybook/react';

import CodeBlock from './';

const meta: Meta<typeof CodeBlock> = {
  component: CodeBlock,
};

export default meta;

type Story = StoryObj<typeof CodeBlock>;

export const Default: Story = {
  args: {
    value: '<Sample prop1="text">Hello Storybook</Sample>',
    language: 'tsx',
  },
};
