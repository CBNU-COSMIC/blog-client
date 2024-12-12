import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './styles/reset.css';
import './styles/font.css';
import './styles/color.css';
import Layout from './components/Layout/Layout.tsx';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn.tsx';
import SignUp from './pages/SignUp/SignUp.tsx';
import Introduction from './pages/Introduction/Introduction.tsx';
import Schedule from './pages/Schedule/Schedule.tsx';
import Notices from './pages/Notices/Notices.tsx';
import Wirte from './components/Write/Write.tsx';
import NoticeDetail from './pages/Notices/NoticeDetail.tsx';
import Board from './pages/Board/Board.tsx';
import BoardDetail from './pages/Board/BoardDetail.tsx';
import Edit from './components/Edit/Edit.tsx';
import Admin from './pages/Admin/Admin.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
  {
    path: '/introduction',
    element: (
      <Layout>
        <Introduction />
      </Layout>
    ),
  },
  {
    path: '/notices/:boardId/:page',
    element: (
      <Layout>
        <Notices />
      </Layout>
    ),
  },
  {
    path: '/notices/:boardId/write',
    element: (
      <Layout>
        <Wirte />
      </Layout>
    ),
  },
  {
    path: '/notices/:boardId/detail/:postId',
    element: (
      <Layout>
        <NoticeDetail />
      </Layout>
    ),
  },
  {
    path: '/notices/:boardId/edit/:postId',
    element: (
      <Layout>
        <Edit />
      </Layout>
    ),
  },
  {
    path: '/board/:boardId/:page',
    element: (
      <Layout>
        <Board />
      </Layout>
    ),
  },
  {
    path: '/board/:boardId/write',
    element: (
      <Layout>
        <Wirte />
      </Layout>
    ),
  },
  {
    path: '/board/:boardId/detail/:postId',
    element: (
      <Layout>
        <BoardDetail />
      </Layout>
    ),
  },
  {
    path: '/board/:boardId/edit/:postId',
    element: (
      <Layout>
        <Edit />
      </Layout>
    ),
  },
  {
    path: '/schedule',
    element: (
      <Layout>
        <Schedule />
      </Layout>
    ),
  },
  {
    path: '/admin',
    element: (
      <Layout>
        <Admin />
      </Layout>
    ),
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
