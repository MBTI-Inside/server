import tw from 'tailwind-styled-components';

export const SideBarContainer = tw.span`
  flex
  w-auto
  h-auto
`;

export const SideBarToggle = tw.input`
  drawer-toggle
  text-black
`;

export const SideBarButton = tw.label`
  drawer-button
`;

export const SideBarOverlay = tw.label`
  drawer-overlay
`;

export const SideBarContentContainer = tw.div`
  drawer-side
  h-full
  z-50
`;

export const Ul = tw.ul`
  menu
  p-4
  w-80
  h-full
  bg-base-200
  text-base-content
  bg-regal-purple
`;

export const Li = tw.li`
  mt-9
  h-14
  w-full 
  text-lg
  btn
  rounded-full
  border-none
  font-bold
`;

export const FooterLi = tw.li`
  flex
  mt-auto
  pointer-events-none
`;

export const FooterDiv = tw.div`
  self-center
  text-black
`;

export const UserContainer = tw.div`
  flex
  flex-row
`;

export const UserProfile = tw.div`
  w-16
  h-16
  rounded
`;

export const UserInfoContainer = tw.div`
  ml-4
`;

export const UserInfo = tw.div`
  text-sm
`;
