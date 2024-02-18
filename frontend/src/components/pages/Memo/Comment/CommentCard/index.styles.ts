import tw from 'tailwind-styled-components';

export const CommentCardContainer = tw.div`
    flex 
    flex-col 
    shadow-xl 
    bg-green-200 
    mb-3 
    rounded-xl 
    p-2
`;

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

export const CommentCardUserInfo = tw.div`
    flex 
    justify-between 
    items-center
`;

export const CommentCardContent = tw.div`
    flex 
    flex-col
`;

export const CommentCardHistory = tw.div`
    flex 
    justify-between 
    items-center
`;
