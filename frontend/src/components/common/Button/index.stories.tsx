import type { Meta, StoryObj } from '@storybook/react';

import Button from './index';

const meta = {
  title: 'components/common/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  args: {
    type: 'button',
    disabled: false,
    classProp: 'w-80 h-14 text-lg bg-black hover:bg-gray-700 text-white',
    children: '테스트 하러 가기',
    onClick: (e) => {
      console.log(e);
    }
  }
};

export const YellowButton: Story = {
  args: {
    type: 'button',
    disabled: false,
    classProp: 'w-80 h-14 text-lg bg-white hover:bg-yellow-300 text-black',
    children: '통계 보러 가기',
    onClick: (e) => {
      console.log(e);
    }
  }
};

export const BlueButton: Story = {
  args: {
    type: 'button',
    disabled: false,
    classProp: 'w-80 h-14 text-lg bg-blue-600 text-white hover:bg-blue-700',
    children: '담벼락 보러 가기',
    onClick: (e) => {
      console.log(e);
    }
  }
};
