import { Meta, StoryObj } from '@storybook/react';

import TextItem from '@/atoms/TextItem';

import TextList from './';

const meta: Meta<typeof TextList> = {
  component: TextList,
};

export default meta;

type Story = StoryObj<typeof TextList>;

export const Default: Story = {
  args: {
    children: (
      <>
        <TextItem text="hello" />
        <TextItem text="goodbye" />
        <TextItem text="thanks" />
      </>
    ),
  },
};
