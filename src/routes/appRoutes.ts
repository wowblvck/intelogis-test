interface AppRoutesProps {
  name: string;
  path: AppRoutes;
}

enum AppRoutes {
  Home = '/',
  Routes = '/routes',
}

const appRoutes: AppRoutesProps[] = [
  {
    name: 'Панель Intelogis',
    path: AppRoutes.Home,
  },
  {
    name: 'Маршруты',
    path: AppRoutes.Routes,
  },
];

export { AppRoutes, appRoutes };
