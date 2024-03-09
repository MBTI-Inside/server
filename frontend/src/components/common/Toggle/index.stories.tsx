import type { Meta, StoryObj } from '@storybook/react';

import Toggle from './index';

const meta = {
  title: 'components/common/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    left: { control: 'text' },
    right: { control: 'text' },
    selectedOption: { control: 'text' },
    onSelect: { action: 'onSelect' }
  }
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultToggle: Story = {
  args: {
    left: 'E', // left prop의 기본값 설정
    right: 'I', // right prop의 기본값 설정
    selectedOption: 'left', // selectedOption prop의 기본값 설정
    onSelect: (newOption: string) => console.log(newOption) // onSelect prop의 기본값 설정
  }
};
