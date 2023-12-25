import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';

import TextItem from './';

export default {
  component: TextItem,
  title: 'components/atoms/TextItem',
} as Meta;

type Props = ComponentProps<typeof TextItem>;

const Template: Story<Props> = (args) => (
  <ul>
    <TextItem {...args} />
    <TextItem {...args} />
    <TextItem {...args} />
  </ul>
);

export const Default = Template.bind({});

Default.args = {
  text: 'list item',
};
