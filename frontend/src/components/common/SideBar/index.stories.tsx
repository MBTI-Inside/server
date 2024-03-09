import { BrowserRouter, NavLink } from 'react-router-dom';

import {
  HeaderContainer,
  InterfaceContainer,
  LoginIcon,
  MenuIcon
} from '@/components/layout/Header/index.styles';

import MainLogoSvg from '@/assets/image/mainlogo.svg?react';

import SideBar from './index';

export default {
  title: 'components/common/SideBar',
  component: SideBar
};

const Template = () => (
  <BrowserRouter>
    <HeaderContainer>
      <NavLink to="/">
        <MainLogoSvg />
      </NavLink>
      <InterfaceContainer>
        <LoginIcon />
        <SideBar>
          <MenuIcon />
        </SideBar>
      </InterfaceContainer>
    </HeaderContainer>
  </BrowserRouter>
);

export const Primary = Template.bind({});
