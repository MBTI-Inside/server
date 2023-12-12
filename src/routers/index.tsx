import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Home = lazy(() => import('@/pages/Home'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const routePaths = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/notfound',
    element: <NotFound />
  }
];

export default routePaths;
