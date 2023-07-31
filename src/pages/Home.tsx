import { Grid } from 'antd';
import { Card, List, Space, Typography } from 'antd';
import Link from 'antd/es/typography/Link';

const { useBreakpoint } = Grid;

type stackData = {
  link: string;
  name: string;
};

const stackData: stackData[] = [
  {
    link: 'https://reactjs.org/',
    name: 'React JS',
  },
  {
    link: 'https://redux-toolkit.js.org/',
    name: 'Redux Toolkit',
  },
  {
    link: 'https://redux-saga.js.org/',
    name: 'Redux Saga',
  },
  {
    link: 'https://github.com/remix-run/react-router#readme',
    name: 'Redux Router',
  },
  {
    link: 'https://www.typescriptlang.org/',
    name: 'TypeScript',
  },
  {
    link: 'https://ant.design/',
    name: 'Ant Design',
  },
  {
    link: 'https://leafletjs.com/',
    name: 'Leaflet',
  },
  {
    link: 'https://mockapi.io/projects',
    name: 'mockapi.io',
  },
  {
    link: 'https://axios-http.com/ru/',
    name: 'Axios',
  },
];

const Home = () => {
  const { xs } = useBreakpoint();
  return (
    <Space align="center" direction="vertical" style={{ textAlign: 'center', width: '100%' }}>
      <Typography.Title level={xs ? 3 : 2} style={{ textAlign: 'center' }}>
        Добро пожаловать в демонстрационную версию приложения&nbsp;
        <Link
          href="http://intelogis.ru/"
          style={{ fontSize: xs ? '24px' : '30px' }}
          target="_blank"
        >
          Intelogis
        </Link>
      </Typography.Title>
      <List grid={{ column: 4, gutter: 16 }} style={{ textAlign: 'left' }}>
        <List.Item>
          <Card size="small" title="Основная идея">
            Используя современные инструменты для разработки интерфейсов реализовать страницу с
            отображением списка маршрутов (у каждого маршрута n-ое количество точек) и карту, на
            которой располагаются точки маршрута. С помощью запроса к&nbsp;
            <Link href="https://project-osrm.org/docs/v5.24.0/api/#route-service" target="_blank">
              Project OSRM
            </Link>
            &nbsp;получить геометрию полилиний и отрисовать её на карте.
          </Card>
        </List.Item>
        <List.Item>
          <Card size="small" title="Стек">
            <Space wrap>
              {stackData.map((data, idx) => (
                <Link href={data.link} key={`${idx}_${data.name}`} target="_blank">
                  {data.name}
                </Link>
              ))}
            </Space>
          </Card>
        </List.Item>
      </List>
    </Space>
  );
};

export default Home;
