import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';

import Login from './';

export default {
  component: Login,
  title: 'components/organisms/Login',
  argTypes: {
    login: { action: 'login' },
    logout: { action: 'logout' },
  },
} as Meta;

type Props = ComponentProps<typeof Login>;

const Template: Story<Props> = (args) => {
  return <Login {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  userId: '',
};
