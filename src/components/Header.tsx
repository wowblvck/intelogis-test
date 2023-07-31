import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons/lib/icons';
import { appRoutes } from '@routes/appRoutes';
import { getDefaultPath } from '@utils/helperFunctions';
import { Typography } from 'antd';
import Button from 'antd/es/button';
import { Header as HeaderAnt } from 'antd/es/layout/layout';
import { useLocation, useParams } from 'react-router-dom';

type HeaderProps = {
  menuCollapsed: boolean;
  onCollapsed: () => void;
};

const Header: React.FC<HeaderProps> = ({ menuCollapsed, onCollapsed }) => {
  const location = useLocation();
  const params = useParams<Record<string, string>>();

  const defaultPath = getDefaultPath(location, params);

  const page = appRoutes.find((route) => route.path === defaultPath);

  return (
    <HeaderAnt
      style={{
        alignItems: 'center',
        backgroundColor: '#fff',
        boxShadow: '0px 2px 8px 0px rgba(34, 60, 80, 0.2)',
        columnGap: '10px',
        display: 'flex',
        padding: 0,
      }}
    >
      <Button
        style={{
          fontSize: '16px',
          height: 64,
          width: 64,
        }}
        icon={menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={onCollapsed}
        type="text"
      />
      {page && (
        <Typography.Title style={{ fontSize: '24px', margin: 0 }}>{page.name}</Typography.Title>
      )}
    </HeaderAnt>
  );
};

export default Header;
