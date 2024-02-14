import { lazy } from 'react';

const Home = lazy(() => import('@/pages/Home'));
const Memo = lazy(() => import('@/pages/Memo'));
const Login = lazy(() => import('@/pages/Login'));
const Test = lazy(() => import('@/pages/Test'));
const TestResult = lazy(() => import('@/pages/Test/Result'));
const MemoView = lazy(() => import('@/pages/Memo/View'));
const Stats = lazy(() => import('@/pages/Stats'));
const StatsMBTI = lazy(() => import('@/pages/Stats/View'));
const Admin = lazy(() => import('@/pages/Admin'));
const MyPage = lazy(() => import('@/pages/MyPage'));
const Question = lazy(() => import('@/pages/Question'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const routePaths = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/test',
    element: <Test />
  },
  {
    path: '/result/:mbti',
    element: <TestResult />
  },
  {
    path: '/memo',
    element: <Memo />
  },
  {
    path: '/memo-view/:id',
    element: <MemoView />
  },
  {
    path: '/stats',
    element: <Stats />
  },
  {
    path: '/stats/:mbti',
    element: <StatsMBTI />
  },
  {
    path: '/admin',
    element: <Admin />
  },
  {
    path: '/mypage',
    element: <MyPage />
  },
  {
    path: '/question',
    element: <Question />
  },
  {
    path: '/notfound',
    element: <NotFound />
  }
];

export default routePaths;
