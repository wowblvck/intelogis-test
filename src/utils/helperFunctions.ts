import { Location, Params } from 'react-router-dom';

const calculateCenter = <T extends { location: [number, number] }>(
  points: T[]
): [number, number] => {
  const numPoints = points.length;
  if (numPoints === 0) return [0, 0];

  const center = points.reduce(
    (accumulator, point) => {
      return [accumulator[0] + point.location[0], accumulator[1] + point.location[1]];
    },
    [0, 0]
  );

  return [center[0] / numPoints, center[1] / numPoints];
};

const convertPointsToString = <T extends { location: [number, number] }>(points: T[]) => {
  const locationsString = points.map((point) => point.location.slice().reverse().join()).join(';');
  return locationsString;
};

const getDefaultPath = (location: Location, params: Params) => {
  const defaultKey = Object.values(params).reduce(
    (path, param) => (path ? path.replace('/' + param, '') : ''),
    location.pathname
  );
  return defaultKey;
};

export { calculateCenter, convertPointsToString, getDefaultPath };
