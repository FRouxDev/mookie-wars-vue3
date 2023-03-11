import { type PointTuple, type LatLngExpression, icon } from 'leaflet';

export const GW2_TILES_URL = 'https://v2.lebusmagique.fr/img/map/tiles/{z}/{x}/{y}.jpg';
export const CONTINENT_DIMENSION = [81920, 114688] as PointTuple;
export const MAP_CENTER = [-240, 325] as LatLngExpression;
export const MIN_ZOOM = 2;
export const MAX_ZOOM = 5;
export const DEFAULT_ZOOM = 3;

const iconOptions = {
  iconUrl: '/img/pin.png',
  iconSize: [30, 40] as PointTuple,
};

export const GW2_ICON = icon(iconOptions);
