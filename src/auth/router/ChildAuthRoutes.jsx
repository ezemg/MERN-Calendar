import React from 'react';
import { LoginPage } from '../pages/LoginPage.jsx';
import { Navigate } from 'react-router-dom';

export const ChildAuthRoutes = [
  {
    index: true,
    path: 'login',
    element: <LoginPage />,
  },
  {
    path: '/auth/*',
    element: <Navigate to={'/auth/login'} />,
  },
];
