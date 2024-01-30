import type { Meta, StoryObj } from '@storybook/react';

import Modal from './index';

const meta = {
  title: 'components/common/Modal',
  component: Modal,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultModal: Story = {
  args: {}
};
