
import Settings from '../pages/admin/Settings';

const routes = [
  {
    path: '/admin',
    children: [
      { path: 'settings', element: Settings },
    ],
  },
];

export default routes;