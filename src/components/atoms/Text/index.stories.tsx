import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';

import Text from './';

export default {
  component: Text,
  title: 'components/atoms/Text',
} as Meta;

type Props = ComponentProps<typeof Text>;

const Template: Story<Props> = (args) => <Text {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: 'hello Next.js',
};
