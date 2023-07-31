import type { RoutesList } from '@interfaces/Routes.interface';

import { setCurrentRoute } from '@reducers/route.reducer';
import { AppRoutes } from '@routes/appRoutes';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import Empty from 'antd/es/empty';
import Table, { ColumnsType } from 'antd/es/table';
import Paragraph from 'antd/es/typography/Paragraph';
import { useNavigate } from 'react-router-dom';

const columns: ColumnsType<RoutesList> = [
  {
    dataIndex: 'name',
    render: (name: string) => <a>{name}</a>,
    title: 'Маршрут',
  },
];

type RoutesListProps = {
  loading: boolean;
  source: RoutesList[];
};

const expandedRowRender = (record: RoutesList) => {
  return (
    <Table
      columns={[
        { dataIndex: 'name', title: 'Локация' },
        {
          dataIndex: 'location',
          render: (locations: number[]) => (
            <Paragraph copyable style={{ margin: 0 }}>
              {locations.join(', ')}
            </Paragraph>
          ),
          responsive: ['lg', 'sm', 'xl', 'xxl'],
          title: 'Координаты',
        },
      ]}
      dataSource={record.points}
      pagination={false}
      rowKey={(route) => route.name}
      size="middle"
    />
  );
};

const RoutesList: React.FC<RoutesListProps> = ({ loading, source }) => {
  const navigate = useNavigate();
  const currentRoute = useAppSelector((state) => state.routeReducer.currentRoute);
  const dispatch = useAppDispatch();

  return (
    <Table
      locale={{
        emptyText: () => (
          <Empty description="Маршруты отсутствуют" image={Empty.PRESENTED_IMAGE_SIMPLE} />
        ),
      }}
      onRow={(route) => {
        return {
          onClick: () => {
            if (route.points.length) {
              dispatch(setCurrentRoute(route));
              navigate(`${AppRoutes.Routes}/${route.id}`);
            }
          },
        };
      }}
      bordered
      columns={columns}
      dataSource={source}
      expandable={{ expandedRowRender, rowExpandable: (record) => !!record.points.length }}
      loading={loading}
      pagination={{ pageSize: 10, position: ['bottomLeft'] }}
      rowClassName={(route) => (route.id === currentRoute?.id ? 'ant-table-row-selected' : '')}
      rowKey={(route) => route.id}
      size="middle"
    />
  );
};

export default RoutesList;
