import React, { Suspense, type FC } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
const LoginPage = React.lazy(() => import('./pages/LoginPage/LoginPage'));
const RegisterPage = React.lazy(() => import('./pages/RegisterPage/RegisterPage'));
const HomePape = React.lazy(() => import('./pages/HomePage/HomePape'));
const Layout = React.lazy(() => import('./components/Layout/Layout'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<h1>Loding...</h1>}>
            <HomePape />
          </Suspense>
        )
      },
      {
        path: '/login',
        element: (
          <Suspense fallback={<h1>Loding...</h1>}>
            <LoginPage />
          </Suspense>
        )
      },
      {
        path: '/register',
        element: (
          <Suspense fallback={<h1>Loding...</h1>}>
            <RegisterPage />
          </Suspense>
        )
      }
    ]
  }
]);

const App: FC = () => {
  return <RouterProvider router={router} />;
};
export default App;
