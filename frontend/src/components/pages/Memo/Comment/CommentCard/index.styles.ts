import tw from 'tailwind-styled-components';

export const UserIcon = tw.div`
    bg-yellow-500
    bg-no-repeat 
    bg-center 
    bg-cover
    w-8
    h-8
    mr-3
    rounded-full
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

export const DropDownContents = tw.ul`
    dropdown-content 
    z-[1] 
    menu 
    p-2 
    shadow 
    bg-base-100 
    rounded-box 
    w-24
`;
