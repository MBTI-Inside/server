import tw from 'tailwind-styled-components';

// export const FooterContainer = tw.footer`
//   bg-regal-purple
//   w-full
//   m-auto
//   p-4
// `;

export const FooterWrapper = tw.footer`
bg-regal-purple
w-full
m-auto
p-4
flex
items-center
justify-between
`;

export const FooterTextArea = tw.div`
flex
h-12
flex-col
justify-center
flex-shrink-0
`;

export const FooterLinkIcon = tw.div`
flex
flex-row
`;

export const FooterLink = tw.a`
mr-3
cursor-pointer
`;

export const FooterText = tw.div`
  text-xs
  text-black

`;
