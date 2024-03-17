import type { Meta, StoryObj } from '@storybook/react';

import ColorChip from './index';

const meta = {
  title: 'components/common/ColorChip',
  component: ColorChip,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof ColorChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultColorChip: Story = {
  args: {}
};
