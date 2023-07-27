import { Space, Typography } from 'antd';

const Home = () => {
  return (
    <Space align="center" direction="vertical" style={{ textAlign: 'center' }}>
      <Typography.Title level={2} style={{ textAlign: 'center' }}>
        Добро пожаловать в демонстрацию версию приложения
      </Typography.Title>
    </Space>
  );
};

export default Home;
