import { Navigate, Outlet } from 'react-router-dom';
import { status } from '../../globals.js';

export const CalendarRoutes = () => {
  if (status === 'not-authenticated') return <Navigate to="/auth/login" />;
  return <Outlet />;
};
