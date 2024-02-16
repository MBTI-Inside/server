import tw from 'tailwind-styled-components';

export const MemoViewContentWrapper = tw.section`
    card
    w-80 
    h-96
    bg-white
    shadow-xl
    bg-opacity-30
`;

export const CardBody = tw.section`
    card-body 
    p-6 
    justify-between
    opacity-100
`;

export const CardContent = tw.article`
    h-32
`;

export const Title = tw.h2`
    card-title 
    line-clamp-2
`;

export const Content = tw.div`
    pt-2 
    line-clamp-8
`;
