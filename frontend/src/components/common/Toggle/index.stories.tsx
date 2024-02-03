import type { Meta, StoryObj } from '@storybook/react';

import Toggle from './index';

const meta = {
  title: 'components/common/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultToggle: Story = {
  args: {}
};
