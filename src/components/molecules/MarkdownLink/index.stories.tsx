import { Meta, StoryObj } from '@storybook/react';

import MarkdownLink from './';

const meta: Meta<typeof MarkdownLink> = {
  component: MarkdownLink,
};

export default meta;

type Story = StoryObj<typeof MarkdownLink>;

const icon = {
  iconName: 'OpenInNew',
  fillColor: 'link',
  size: '16',
  sideMargin: '4',
} as const;

export const Default: Story = {
  args: {
    children: '外部リンク',
    linkPath: 'https://picsum.photos/800/600',
    icon,
  },
};
