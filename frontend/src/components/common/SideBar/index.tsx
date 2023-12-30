import { ReactNode, useState } from 'react';
import { NavLink } from 'react-router-dom';

import MainLogoSvg from '@/assets/image/mainlogo.svg?react';

import {
  SideBarButton,
  SideBarContainer,
  SideBarContent,
  SideBarContentContainer,
  SideBarFooter,
  SideBarFooterContent,
  SideBarOverlay,
  SideBarToggle,
  SiderBarItem
} from './index.styles';

interface SideBarProps {
  children: ReactNode;
}

const SideBar = ({ children }: SideBarProps) => {
  // SideBar 표시 여부 상태 초기화
  const [isChecked, setIsChecked] = useState(false);

  // SideBar Button 클릭 시 상태 변화
  const handleSideBarToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <SideBarContainer>
      <SideBarToggle id="side-bar" type="checkbox" />
      <SideBarButton htmlFor="side-bar" onClick={handleSideBarToggle}>
        {children}
      </SideBarButton>
      <SideBarContentContainer>
        <SideBarOverlay
          htmlFor="side-bar"
          aria-label="close sidebar"
          onClick={handleSideBarToggle}
        />
        <SideBarContent>
          <NavLink to="/" onClick={handleSideBarToggle}>
            <MainLogoSvg />
          </NavLink>
          <NavLink onClick={handleSideBarToggle} to="/test">
            <SiderBarItem className="bg-regal-yellow text-black">
              테스트 하러가기
            </SiderBarItem>
          </NavLink>
          <NavLink to="/stats" onClick={handleSideBarToggle}>
            <SiderBarItem className="bg-black text-white">
              통계 보러가기
            </SiderBarItem>
          </NavLink>
          <NavLink to="/board" onClick={handleSideBarToggle}>
            <SiderBarItem className="bg-black text-white">
              담벼락 보러가기
            </SiderBarItem>
          </NavLink>
          <SideBarFooter>
            <SideBarFooterContent className="text-black">
              AYT Company
            </SideBarFooterContent>
            <SideBarFooterContent className="pointer-events-auto text-black">
              <a
                href="https://github.com/rebi13/MBTI-Inside"
                target="_blank"
                rel="MBTI-Inside noreferrer"
              >
                https://github.com/rebi13/MBTI-Inside
              </a>
            </SideBarFooterContent>
          </SideBarFooter>
        </SideBarContent>
      </SideBarContentContainer>
    </SideBarContainer>
  );
};

export default SideBar;
