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
    path: '/notices/:boardId',
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
    path: '/schedule',
    element: (
      <Layout>
        <Schedule />
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
