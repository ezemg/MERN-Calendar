import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { status } from '../../globals.js';
export const AuthRoutes = () => {
  if (status === 'authenticated') return <Navigate to="/" />;

  return <Outlet />;
};
