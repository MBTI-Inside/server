import tw from 'tailwind-styled-components';

export const MbtiList = tw.div`
  relative
  bg-black 
  w-11/12 
  text-white 
  flex 
  items-center 
  p-4
  h-20
  rounded-full 
  text-5xl 
  font-black 
`;

export const MbtiLabel = tw.label`
  block 
  w-full 
  cursor-pointer 
  p-2
`;

export const Toggle = tw.div`
    absolute
    w-1/2
    h-16
    block
    bg-[#b2acf9]
    transition-all
    duration-700
    rounded-full
`;
