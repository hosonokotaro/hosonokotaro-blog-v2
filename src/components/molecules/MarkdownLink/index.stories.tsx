import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';

import MarkdownLink from './';

export default {
  component: MarkdownLink,
  title: 'components/molecules/MarkdownLink',
} as Meta;

type Props = ComponentProps<typeof MarkdownLink>;

const Template: Story<Props> = (args) => <MarkdownLink {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: '外部リンク',
  linkPath: 'https://picsum.photos/800/600',
  icon: {
    fileName: 'open_in_new_red_24dp.svg',
    alt: 'external-link',
    size: '16',
    sideMargin: '4',
  },
};
