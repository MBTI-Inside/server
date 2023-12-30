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

export const DrawerContent = tw.div`
  drawer-content
  h-9
`;

export const DrawerSide = tw.div`
  drawer-side
  z-50
`;

export const SideBarContent = tw.ul`
  menu
  p-4
  w-80
  h-full
  bg-base-200
  text-base-content
  bg-regal-purple
`;

export const SiderBarItem = tw.li`
  mt-9
  btn
  btn-wide
  w-full
  h-14
  flex-shrink-0
  rounded-full
  shadow-lg
  border-none
`;

export const SideBarFooter = tw.li`
  flex
  mt-auto
  pointer-events-none
`;

export const SideBarFooterContent = tw.div`
  self-center
`;
