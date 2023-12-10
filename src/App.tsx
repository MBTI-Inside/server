import '@/App.css';
import router from '@/routers';
import { RouterProvider } from 'react-router-dom';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

function App() {
  return (
    <>
      <Header></Header>
      <RouterProvider router={router}></RouterProvider>
      <Footer></Footer>
    </>
  );
}

export default App;
