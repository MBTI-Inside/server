import { BsList } from 'react-icons/bs';
import { FaRegCircleUser } from 'react-icons/fa6';
import { FiLogIn } from 'react-icons/fi';
import tw from 'tailwind-styled-components';

export const HeaderContainer = tw.header`
  flex
  bg-regal-purple
  p-2.5
  items-center
  justify-between
`;

export const InterfaceContainer = tw.div`
flex
w-20
justify-between
`;

// TODO: 겹치는 style을 공통으로 사용할 수 없을까?
export const LoginIcon = tw(FiLogIn)`
text-4xl
text-black
`;

export const UserIcon = tw(FaRegCircleUser)`
text-4xl
text-black
`;

export const MenuIcon = tw(BsList)`
text-4xl
text-black
`;
