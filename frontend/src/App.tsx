import routePaths from '@/routers';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import tw from 'tailwind-styled-components';

import ModalProvider from '@/hooks/useModal';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

function App() {
  return (
    <BrowserRouter>
      <AppWrapper>
        <ModalProvider>
          {/* TODO: fallback 상태에서 로딩 컴포넌트 퍼블리싱 */}
          <Suspense fallback={<>loading...</>}>
            <Header />
            <ContentWrapper>
              <Routes>
                {routePaths.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
            </ContentWrapper>
            <Footer />
          </Suspense>
        </ModalProvider>
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;

const AppWrapper = tw.div`
  flex 
  flex-col 
  min-h-screen
`;

const ContentWrapper = tw.div`
  flex-1 
  overflow-y-auto
`;
