import { Navigate, Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';

export const CalendarRoutes = () => {
  const { status } = useSelector((state) => state.auth);
  if (status === 'not-authenticated') return <Navigate to="/auth/login" />;
  return <Outlet />;
};
