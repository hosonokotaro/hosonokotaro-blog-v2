import { Meta, StoryObj } from '@storybook/react';

import SiteTitle from './';

const meta: Meta<typeof SiteTitle> = {
  component: SiteTitle,
};

export default meta;

type Story = StoryObj<typeof SiteTitle>;

export const Default: Story = {
  args: {
    text1: 'HOSONO',
    text2: 'KOTARO',
    text3: 'Tech Blog',
  },
};
