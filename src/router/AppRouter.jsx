import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RouterConfig } from './RouterConfig.jsx';
import { getEnvVariables } from '../helpers/getEnvVariables.js';
import { useAuthStore } from '../hooks/useAuthStore.js';
import { useEffect } from 'react';

const router = createBrowserRouter(RouterConfig);

export const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);
  if (status === 'checking') {
    return <h3>Cargando...</h3>;
  }

  return <RouterProvider router={router} />;
};
