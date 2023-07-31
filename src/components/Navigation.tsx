import { CarOutlined, HomeOutlined } from '@ant-design/icons/lib/icons';
import { AppRoutes } from '@routes/appRoutes';
import { getDefaultPath } from '@utils/helperFunctions';
import Menu from 'antd/es/menu';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams<Record<string, string>>();

  const defaultPath = getDefaultPath(location, params);

  return (
    <Menu
      items={[
        {
          icon: <HomeOutlined />,
          key: AppRoutes.Home,
          label: 'Главная',
          onClick: () => navigate(AppRoutes.Home),
        },
        {
          icon: <CarOutlined />,
          key: AppRoutes.Routes,
          label: 'Маршруты',
          onClick: () => navigate(AppRoutes.Routes),
        },
      ]}
      defaultSelectedKeys={[defaultPath!]}
      mode="inline"
      theme="dark"
    />
  );
};

export default Navigation;
