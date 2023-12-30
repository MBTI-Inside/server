// import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import SideBar from '@/components/common/SideBar';

import MainLogoSvg from '@/assets/image/mainlogo.svg?react';

import {
  HeaderContainer,
  InterfaceContainer,
  LoginIcon,
  MenuIcon,
  UserIcon
} from './index.styles';

const Header = () => {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <MainLogoSvg />
      </NavLink>

      <InterfaceContainer>
        {/* 로그인 시 표시*/}
        {/* <UserIcon /> */}
        <LoginIcon />
        <SideBar>
          <MenuIcon />
        </SideBar>
      </InterfaceContainer>
    </HeaderContainer>
  );
};

export default Header;
