import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RouterConfig } from './RouterConfig.jsx';

const router = createBrowserRouter(RouterConfig);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
