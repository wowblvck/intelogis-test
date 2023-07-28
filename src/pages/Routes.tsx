import Map from '@components/Map';
import RoutesList from '@components/RoutesList';
import { clearCurrentRoute, fetchRoutesStart, setCurrentRoute } from '@reducers/routes.reducer';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { Col, Row, notification } from 'antd';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Routes: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { currentRoute, data, error, loading } = useAppSelector((state) => state.routesReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (error) {
      notification.error({
        description: error,
        duration: 3,
        message: 'Ошибка',
        placement: 'top',
        type: 'error',
      });
    }
  }, [error]);

  useEffect(() => {
    dispatch(fetchRoutesStart());
    return () => {
      dispatch(clearCurrentRoute());
    };
  }, [dispatch]);

  useEffect(() => {
    if (id && data) {
      const currentRoute = data.find((route) => route.id === Number(id));
      if (currentRoute) {
        dispatch(setCurrentRoute(currentRoute));
      }
    }
  }, [id, data, dispatch]);
  return (
    <Row gutter={16} style={{ height: '100%' }}>
      <Col span={currentRoute ? 6 : 24}>
        <RoutesList loading={loading} source={data!} />
      </Col>
      {currentRoute && (
        <Col span={18}>
          <Map route={currentRoute} />
        </Col>
      )}
    </Row>
  );
};

export default Routes;
