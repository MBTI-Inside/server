import { ReactNode, useState } from 'react';

import {
  DrawerContent,
  DrawerSide,
  SideBarButton,
  SideBarContainer,
  SideBarContent,
  SideBarFooter,
  SideBarFooterContent,
  SideBarOverlay,
  SideBarToggle,
  SiderBarItem
} from './index.styles';

interface SideBarProps {
  children: React.ReactNode;
}

const SideBar = ({ children }: SideBarProps) => {
  // SideBar 표시 여부 상태 초기화
  const [isChecked, setIsChecked] = useState(false);

  // SideBar Button 클릭 시 상태 변화
  const handleSideBarToggle = () => {
    setIsChecked(!isChecked);
  };

  {
    /* <Drawer>
        <DrawerContent onClick={handleDrawerToggle}>
          <DrawerButton htmlFor="side-bar">
            <ScaledBsList></ScaledBsList>
          </DrawerButton>
        </DrawerContent>
        <DrawerSide>
          <DrawerOverlay
            htmlFor="side-bar"
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
                  href="https://github.com/rebi13/MBTI-Inside"
                  target="_blank"
                  rel="MBTI-Inside noreferrer"
                >
                  https://github.com/rebi13/MBTI-Inside
                </a>
              </SideBarFooterContent>
            </SideBarFooter>
          </SideBarContent>
        </DrawerSide>
      </Drawer> */
  }

  return (
    <SideBarContainer>
      <SideBarToggle id="side-bar" type="checkbox" />
      <SideBarButton htmlFor="side-bar" onClick={handleSideBarToggle}>
        {children}
      </SideBarButton>
      <div className="drawer-side">
        <SideBarOverlay
          htmlFor="side-bar"
          aria-label="close sidebar"
          onClick={handleSideBarToggle}
        />
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <a>테스트 하러가기</a>
          </li>
          <li>
            <a>통계 보러가기</a>
          </li>
          <li>
            <a>담벼락 보러가기</a>
          </li>
        </ul>
      </div>
    </SideBarContainer>
  );
};

export default SideBar;
