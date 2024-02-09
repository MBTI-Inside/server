import tw from 'tailwind-styled-components';

interface ChipProps {
  bg: string;
}

export const chip = tw.span<ChipProps>`
    w-12 
    h-12 
    rounded-full 
    border-black 
    border-4 
    inline-block
   ${(p) => (p.bg ? p.bg : p.bg)}
`;
