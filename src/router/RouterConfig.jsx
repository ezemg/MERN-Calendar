import { AuthRoutes, ChildAuthRoutes } from '../auth/index.js';
import { CalendarRoutes } from '../calendar/router/CalendarRoutes.jsx';
import { ChildCalendarRoutes } from '../calendar/router/ChildCalendarRoutes.jsx.jsx';

export const RouterConfig = [
  {
    path: '/auth/*',
    element: <AuthRoutes />,
    children: ChildAuthRoutes,
  },
  {
    path: '/',
    element: <CalendarRoutes />,
    children: ChildCalendarRoutes,
  },
];
