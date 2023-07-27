import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Routes = () => {
  const { id } = useParams<'id'>();

  useEffect(() => {
    if (id) {
      console.log(id);
    }
  }, [id]);

  return <div>Routes</div>;
};

export default Routes;
