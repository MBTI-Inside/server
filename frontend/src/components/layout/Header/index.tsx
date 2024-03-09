// import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import SideBar from '@/components/common/SideBar';

import MainLogoSvg from '@/assets/image/mainlogo.svg?react';

import * as S from './index.styles';

const Header = () => {
  return (
    <S.HeaderContainer>
      <NavLink to="/">
        <MainLogoSvg />
      </NavLink>

      <S.InterfaceContainer>
        {/* 로그인 시 표시*/}
        {/* <S.UserIcon /> */}
        <S.LoginIcon />
        <SideBar>
          <S.MenuIcon />
        </SideBar>
      </S.InterfaceContainer>
    </S.HeaderContainer>
  );
};

export default Header;
