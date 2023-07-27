import { Footer as FooterAnt } from 'antd/es/layout/layout';
import Space from 'antd/es/space';
import Typography from 'antd/es/typography';

const Footer: React.FC = () => {
  return (
    <FooterAnt
      style={{
        backgroundColor: '#fff',
        boxShadow: '0px -2px 8px 0px rgba(34, 60, 80, 0.2)',
        width: '100%',
      }}
    >
      <Space style={{ justifyContent: 'space-between', width: '100%' }}>
        <Typography.Text>2023</Typography.Text>
        <Typography.Text>Indar Basto (wowblvck)</Typography.Text>
        <Typography.Text>Github</Typography.Text>
      </Space>
    </FooterAnt>
  );
};

export default Footer;
