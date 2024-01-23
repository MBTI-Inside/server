import { lazy } from 'react';

const Home = lazy(() => import('@/pages/Home'));
const Memo = lazy(() => import('@/pages/Memo'));

const NotFound = lazy(() => import('@/pages/NotFound'));

const routePaths = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/memo',
    element: <Memo />
  },
  {
    path: '/notfound',
    element: <NotFound />
  }
];

export default routePaths;
