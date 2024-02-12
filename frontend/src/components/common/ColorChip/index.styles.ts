import tw from 'tailwind-styled-components';

interface ChipProps {
  bg: string;
}

interface IsSelectedColorProps {
  isSelectedColor: boolean;
}

export const Chip = tw.span<ChipProps>`
    w-12 
    h-12 
    rounded-full 
    border-black 
    border-4 
    inline-block
   ${(p) => (p.bg ? p.bg : p.bg)}
`;

export const ColorChipContainer = tw.div`
  flex
  flex-col
`;

export const ChipSet = tw.div`
  flex 
  items-center 
  mt-5
`;

export const ChipLabel = tw.label`
  flex 
  flex-1
  items-center 
  cursor-pointer 
  gap-4
`;

export const ChipName = tw.span<IsSelectedColorProps>`
  flex-1
  ${(p) => (p.isSelectedColor ? 'font-black opacity-100' : 'opacity-30')}
`;
