import tw from 'tailwind-styled-components';

export const MemoViewHeaderContainer = tw.div`
    flex 
    flex-row 
    w-full 
    justify-between 
    items-center 
    h-12
`;

export const DropDowns = tw.div`
    dropdown 
    dropdown-end
`;

export const DropDownButton = tw.div`
    btn 
    m-1 
    bg-inherit 
    border-none 
    text-xl
`;

export const DropDownContent = tw.ul`
    dropdown-content 
    z-[1] 
    menu 
    p-2 
    shadow 
    bg-base-100 
    rounded-box 
    w-24
`;
