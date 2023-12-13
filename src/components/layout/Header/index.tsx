import MainLogoSvg from '@/assets/image/mainlogo.svg?react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Drawer,
  DrawerButton,
  DrawerContent,
  DrawerOverlay,
  DrawerSide,
  DrawerToggle,
  HeaderWrapper,
  Logo,
  ScaledBsList,
  SideBarContent,
  SideBarFooter,
  SideBarFooterContent,
  SiderBarItem
} from './index.styles';

const Header = () => {
  const [isChecked, setIsChecked] = useState(false);
  // 이벤트 핸들러 함수 추가
  const handleDrawerToggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo className="flex-start"></Logo>
        <MainLogoSvg />
      </Link>
      <Drawer>
        <DrawerToggle
          id="my-drawer"
          type="checkbox"
          checked={isChecked}
          readOnly
        ></DrawerToggle>
        <DrawerContent onClick={handleDrawerToggle}>
          <DrawerButton htmlFor="my-drawer">
            <ScaledBsList></ScaledBsList>
          </DrawerButton>
        </DrawerContent>
        <DrawerSide>
          <DrawerOverlay
            htmlFor="my-drawer"
            onClick={handleDrawerToggle}
          ></DrawerOverlay>
          <SideBarContent>
            <Link to="/" onClick={handleDrawerToggle}>
              <Logo></Logo>
            </Link>
            <Link to="/test" onClick={handleDrawerToggle}>
              <SiderBarItem className="bg-regal-yellow text-black">
                테스트 하러가기
              </SiderBarItem>
            </Link>
            <Link to="/stats" onClick={handleDrawerToggle}>
              <SiderBarItem className="bg-black text-white">
                통계 보러가기
              </SiderBarItem>
            </Link>
            <Link to="/board" onClick={handleDrawerToggle}>
              <SiderBarItem className="bg-black text-white">
                담벼락 보러가기
              </SiderBarItem>
            </Link>
            <SideBarFooter>
              <SideBarFooterContent className="text-black">
                AYT Company
              </SideBarFooterContent>
              <SideBarFooterContent className="pointer-events-auto text-black">
                <a
                  href="https://github.com/are-you-T"
                  target="_blank"
                  rel="are-you-T noreferrer"
                >
                  https://github.com/are-you-T
                </a>
              </SideBarFooterContent>
            </SideBarFooter>
          </SideBarContent>
        </DrawerSide>
      </Drawer>
    </HeaderWrapper>
  );
};

export default Header;
