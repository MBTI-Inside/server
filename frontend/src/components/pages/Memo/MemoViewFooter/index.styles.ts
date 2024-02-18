import tw from 'tailwind-styled-components';

export const CardInfoContainer = tw.section`
    flex 
    flex-row
    h-8
    justify-between
    my-5
    w-80
    bg-white
    shadow-xl
    bg-opacity-30
    rounded-full
`;

export const MemoDate = tw.div`
    flex
    items-center
    mr-2
`;

export const HistoryContainer = tw.div`
    flex 
    justify-between 
    w-20
    ml-2
`;

export const History = tw.div`
    flex 
    items-center
`;
