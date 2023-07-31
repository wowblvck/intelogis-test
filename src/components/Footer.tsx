import { Grid } from 'antd';
import { Footer as FooterAnt } from 'antd/es/layout/layout';
import Space from 'antd/es/space';
import Typography from 'antd/es/typography';
import Link from 'antd/es/typography/Link';

const { useBreakpoint } = Grid;

const Footer: React.FC = () => {
  const { xs } = useBreakpoint();
  return (
    <FooterAnt
      style={{
        backgroundColor: '#fff',
        boxShadow: '0px -2px 8px 0px rgba(34, 60, 80, 0.2)',
        width: '100%',
      }}
    >
      <Space
        align="center"
        direction={xs ? 'vertical' : 'horizontal'}
        style={{ justifyContent: 'space-between', width: '100%' }}
      >
        <Typography.Text type="secondary">2023</Typography.Text>
        <Link href="https://wowblvck.tech/" target="_blank">
          Indar Basto (wowblvck)
        </Link>
        <Link href="https://github.com/wowblvck" target="_blank">
          <div
            style={{
              alignItems: 'center',
              columnGap: '5px',
              display: 'flex',
            }}
          >
            <img
              alt="Github"
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              style={{ height: '24px', lineHeight: 0, margin: 0, padding: 0, width: '24px' }}
            />
            Github
          </div>
        </Link>
      </Space>
    </FooterAnt>
  );
};

export default Footer;
