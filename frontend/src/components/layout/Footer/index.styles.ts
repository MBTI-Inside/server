import { BsGithub } from 'react-icons/bs';
import { BsShare } from 'react-icons/bs';
import tw from 'tailwind-styled-components';

export const FooterContainer = tw.footer`
  flex
  bg-regal-purple
  w-full
  items-center 
  p-2.5
  text-neutral-content
`;

export const GitHubIcon = tw(BsGithub)`
  text-4xl
  text-black
`;

export const ShareIcon = tw(BsShare)`
  text-4xl
  text-black
`;

export const FooterTextArea = tw.aside`
flex
item-center
`;

export const FooterNav = tw.nav`
flex
flex-row
`;

export const FooterLink = tw.a`
mr-3
cursor-pointer
`;

export const FooterText = tw.div`
  text-md
  text-black
`;
