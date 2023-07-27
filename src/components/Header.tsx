import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons/lib/icons';
import Button from 'antd/es/button';
import { Header as HeaderAnt } from 'antd/es/layout/layout';

type HeaderProps = {
  menuCollapsed: boolean;
  onCollapsed: () => void;
};

const Header: React.FC<HeaderProps> = ({ menuCollapsed, onCollapsed }) => {
  return (
    <HeaderAnt
      style={{
        alignItems: 'center',
        backgroundColor: '#fff',
        boxShadow: '0px 2px 8px 0px rgba(34, 60, 80, 0.2)',
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
    </HeaderAnt>
  );
};

export default Header;
