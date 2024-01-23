import type { Meta, StoryObj } from '@storybook/react';

import Card from './index';

const meta = {
  title: 'components/pages/Memo/Card',
  component: Card,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCard: Story = {
  args: {}
};
