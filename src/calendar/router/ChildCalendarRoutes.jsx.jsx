import { Navigate } from 'react-router-dom';
import { CalendarPage } from '../pages/CalendarPage.jsx';

export const ChildCalendarRoutes = [
  {
    index: true,
    element: <CalendarPage />,
  },
  {
    path: '/*',
    element: <Navigate to={'/'} />,
  },
];
