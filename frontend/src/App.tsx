import routePaths from '@/routers';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ModalProvider from '@/hooks/useModal';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <ModalProvider>
          <Suspense fallback={<>loading...</>}>
            <Header />
            <Routes>
              {routePaths.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Routes>
            <Footer />
          </Suspense>
        </ModalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
