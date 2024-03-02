import routePaths from '@/routers';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ModalProvider from '@/hooks/useModal';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <ModalProvider>
          <Suspense fallback={<>loading...</>}>
            <Header />
            <div className="flex-1 overflow-y-auto">
              <Routes>
                {routePaths.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
            </div>

            <Footer />
          </Suspense>
        </ModalProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
