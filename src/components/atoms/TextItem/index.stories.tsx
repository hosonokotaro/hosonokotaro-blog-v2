import { Meta, StoryObj } from '@storybook/react';

import TextItem from './';

const meta: Meta<typeof TextItem> = {
  component: TextItem,
  decorators: [
    (StoryComponent) => (
      <ul>
        <StoryComponent />
        <StoryComponent />
        <StoryComponent />
      </ul>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof TextItem>;

export const Default: Story = {
  args: {
    text: 'list item',
  },
};
