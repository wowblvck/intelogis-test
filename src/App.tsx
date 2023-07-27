import RootLayout from '@layouts/RootLayout';
import Home from '@pages/Home';
import Routes from '@pages/Routes';
import { AppRoutes } from '@routes/appRoutes';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      {
        Component: Home,
        index: true,
        path: AppRoutes.Home,
      },
      {
        Component: Routes,
        children: [
          {
            Component: Routes,
            path: ':id',
          },
        ],
        path: AppRoutes.Routes,
      },
    ],
    path: '/',
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
