import RoutesList from '@components/RoutesList';
import { clearRouteState, fetchCurrentRoute } from '@reducers/route.reducer';
import { clearRoutesState, fetchRoutesStart } from '@reducers/routes.reducer';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { Col, Grid, Row, Spin, notification } from 'antd';
import { Suspense, lazy, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Map = lazy(() => import('@components/Map'));

const { useBreakpoint } = Grid;

const Routes: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, loading } = useAppSelector((state) => state.routesReducer);
  const { currentRoute, error: routeError } = useAppSelector((state) => state.routeReducer);
  const dispatch = useAppDispatch();
  const { xl } = useBreakpoint();

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
      dispatch(clearRouteState());
      dispatch(clearRoutesState());
    };
  }, []);

  useEffect(() => {
    if (id && data) {
      const currentRoute = data.find((route) => Number(route.id) === Number(id));
      if (currentRoute) {
        dispatch(fetchCurrentRoute(currentRoute));
      }
    }
  }, [id, data]);

  return (
    <Row align="top" gutter={16} style={{ height: '100%', overflow: 'hidden' }}>
      <Col span={currentRoute && xl ? 6 : 24}>
        <RoutesList loading={loading} source={data!} />
      </Col>
      {currentRoute && (
        <Col
          style={{
            alignItems: 'center',
            display: 'flex',
            height: '100%',
            justifyContent: 'center',
          }}
          span={xl ? 18 : 24}
        >
          <Suspense fallback={<Spin />}>
            <Map route={currentRoute} />
          </Suspense>
        </Col>
      )}
    </Row>
  );
};

export default Routes;
