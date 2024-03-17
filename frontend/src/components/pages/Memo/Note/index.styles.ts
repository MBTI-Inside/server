import tw from 'tailwind-styled-components';

interface ColorProps {
  bg: string;
}

export const NoteContainer = tw.div`
    w-full 
    bg-black
`;

export const NoteHeader = tw.header`
    flex 
    mb-4 
    items-center 
    justify-between 
    px-4
`;

export const Title = tw.div`
    text-4xl 
    font-bold 
    text-white
`;

export const InputTitle = tw.input`
    input 
    input-bordered 
    w-full 
    outline-0 
    mb-6 
    p-3 
    bg-inherit 
    text-white 
    border-solid 
    border-white
`;

export const InputContent = tw.textarea`
    textarea 
    textarea-bordered 
    w-full 
    outline-0 
    h-80 
    resize-none 
    mb-6 
    p-3 
    text-base 
    bg-inherit 
    text-white 
    border-solid 
    border-white
`;

export const MemoColor = tw.div<ColorProps>`
    w-5 
    h-5 
    ml-3 
    ${(p) => (p.bg ? p.bg : p.bg)}
`;
