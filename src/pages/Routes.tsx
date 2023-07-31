import RoutesList from '@components/RoutesList';
import { clearCurrentRoute, fetchCurrentRoute } from '@reducers/route.reducer';
import { fetchRoutesStart } from '@reducers/routes.reducer';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { Col, Row, Spin, notification } from 'antd';
import { Suspense, lazy, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Map = lazy(() => import('@components/Map'));

const Routes: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, loading } = useAppSelector((state) => state.routesReducer);
  const { currentRoute, error: routeError } = useAppSelector((state) => state.routeReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (error || routeError) {
      notification.error({
        description: error || routeError,
        duration: 3,
        message: 'Ошибка',
        placement: 'top',
        type: 'error',
      });
    }
  }, [error, routeError]);

  useEffect(() => {
    dispatch(fetchRoutesStart());
    return () => {
      dispatch(clearCurrentRoute());
    };
  }, [dispatch]);

  useEffect(() => {
    if (id && data) {
      const currentRoute = data.find((route) => Number(route.id) === Number(id));
      if (currentRoute) {
        dispatch(fetchCurrentRoute(currentRoute));
      }
    }
  }, [id, data]);
  return (
    <Row gutter={16} style={{ height: '100%' }}>
      <Col span={currentRoute ? 6 : 24}>
        <RoutesList loading={loading} source={data!} />
      </Col>
      {currentRoute && (
        <Col span={18} style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
          <Suspense fallback={<Spin />}>
            <Map route={currentRoute} />
          </Suspense>
        </Col>
      )}
    </Row>
  );
};

export default Routes;
