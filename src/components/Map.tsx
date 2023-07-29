import type { RoutesList } from '@interfaces/Routes.interface';

import { calculateCenter } from '@utils/helperFunctions';
import { Map as LeafletMap } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useMemo, useRef, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

type MapProps = {
  route: RoutesList;
};

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

export const Map: React.FC<MapProps> = ({ route }) => {
  const mapRef = useRef<LeafletMap>(null);
  const [center, setCenter] = useState<[number, number]>([0, 0]);

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
        style={{ height: '100%' }}
        zoom={11}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {route.points.map((point, idx) => {
          return (
            <Marker key={`${idx}_${point.name}`} position={point.location}>
              <Popup>{point.name}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    ),
    []
  );

  return (
    <>
      {mapRef.current ? <DisplayPosition center={center} map={mapRef.current} zoom={11} /> : null}
      {displayMap}
    </>
  );
};

export default Map;
