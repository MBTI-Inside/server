import { StoryFn } from '@storybook/react';

import Button, { ButtonProps } from './index';

export default {
  title: 'components/common/Button',
  component: Button
};

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  type: 'button',
  disabled: false,
  classProp: 'btn-info btn-lg',
  children: '버튼1',
  onClick: (e) => {
    console.log(e);
  }
};

export const Primary = Template.bind({});

Primary.args = {
  type: 'button',
  disabled: false,
  children: '버튼2'
};

export const Ghost = Template.bind({});

Ghost.args = {
  type: 'button',
  disabled: false,
  children: '버튼3'
};
