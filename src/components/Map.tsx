import type { RoutesList } from '@interfaces/Routes.interface';

import { useAppSelector } from '@store/hooks';
import { calculateCenter } from '@utils/helperFunctions';
import L, { LatLng, LatLngExpression, Map as LeafletMap } from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import 'polyline-encoded';
import { useEffect, useMemo, useRef, useState } from 'react';
import { MapContainer, Marker, Polyline, Popup, TileLayer } from 'react-leaflet';

//IMPORTANCE: To recognize polyline-encoded types in TypeScript
const Lx = L as unknown as Lx.L;

//CRITICAL: To display standard marker icons after build
const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;
//

//CRITICAL: To be able to center the map after changing the route
type DisplayPositionProps = {
  center: [number, number];
  map: LeafletMap;
  zoom: number;
};

const DisplayPosition: React.FC<DisplayPositionProps> = ({ center, map, zoom }) => {
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, map, zoom]);

  return null;
};
//

type MapProps = {
  route: RoutesList;
};

export const Map: React.FC<MapProps> = ({ route }) => {
  const mapRef = useRef<LeafletMap>(null);
  const [center, setCenter] = useState<[number, number]>([0, 0]);
  const { geometry } = useAppSelector((state) => state.routeReducer);
  const [decodedGeometry, setDecodedGeometry] = useState<
    LatLngExpression[] | LatLngExpression[][] | null
  >(null);

  useEffect(() => {
    if (geometry) {
      const decodedGeometry = Lx.Polyline.fromEncoded(geometry);
      setDecodedGeometry(decodedGeometry.getLatLngs() as LatLng[] | LatLng[][]);
    }
  }, [geometry]);

  useEffect(() => {
    const center = calculateCenter(route.points);
    setCenter(center);
  }, [route]);

  const displayMap = useMemo(
    () => (
      <MapContainer
        center={center}
        ref={mapRef}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
        zoom={11}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {decodedGeometry && <Polyline positions={decodedGeometry} />}

        {route.points.map((point, idx) => {
          return (
            <Marker key={`${idx}_${point.name}`} position={point.location}>
              <Popup>{point.name}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    ),
    [route.points, decodedGeometry]
  );

  return (
    <>
      {mapRef.current ? <DisplayPosition center={center} map={mapRef.current} zoom={11} /> : null}
      {displayMap}
    </>
  );
};

export default Map;
