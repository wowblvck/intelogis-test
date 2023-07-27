import Footer from '@components/Footer';
import Header from '@components/Header';
import Navigation from '@components/Navigation';
import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const RootLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsed={collapsed} collapsible trigger={null}>
        <Navigation />
      </Sider>
      <Layout>
        <Header menuCollapsed={collapsed} onCollapsed={handleCollapsed} />
        <Content style={{ padding: 24 }}>
          <Outlet />
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default RootLayout;
