import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';

import PageLayout from './';

export default {
  component: PageLayout,
  title: 'components/atoms/PageLayout',
  argTypes: {
    as: {
      options: ['div', 'article', 'section'],
      control: { type: 'radio' },
    },
  },
} as Meta;

type Props = ComponentProps<typeof PageLayout>;

const Template: Story<Props> = (args) => <PageLayout {...args} />;

export const Default = Template.bind({});

Default.args = {
  as: 'div',
  children: 'Content',
};
