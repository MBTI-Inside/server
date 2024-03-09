import tw from 'tailwind-styled-components';

// TODO: 색상 props로 전달받아야 함.
export const CardWrapper = tw.section`
    card
    w-80 
    h-60 
    bg-green-300
    shadow-xl
`;

export const CardBody = tw.section`
    card-body 
    p-6 
    justify-between
`;

export const CardContent = tw.article`
    h-32
`;

export const Title = tw.h2`
    card-title 
    line-clamp-1
`;

export const Content = tw.div`
    pt-2 
    line-clamp-4
`;

export const CardInfoContainer = tw.section`
    flex 
    flex-col 
    h-16 
    justify-between
`;

export const MemoDate = tw.div`
    ml-auto
`;

export const CardInfo = tw.div`
    flex 
    flex-row 
    justify-between
`;

export const MBTI = tw.div`
    font-bold
`;

export const HistoryContainer = tw.div`
    flex 
    justify-between 
    w-20
`;

export const History = tw.div`
    flex 
    flex-row 
    items-center
`;
