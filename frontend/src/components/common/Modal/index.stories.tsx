import { StoryFn } from '@storybook/react';

import Modal from './index';

export default {
  title: 'components/common/Modal',
  component: Modal
};

const Template: StoryFn<any> = (args) => <Modal {...args} />;

export const Default = Template.bind({});

Default.args = {};
