import { defineStore } from 'pinia';
import {
  MAP_CENTER,
  DEFAULT_ZOOM,
  MIN_ZOOM,
  MAX_ZOOM,
  CONTINENT_DIMENSION,
  GW2_ICON,
  GW2_TILES_URL,
} from '@/config/map.config';
import { LatLngBounds, marker, map, tileLayer, CRS, type Map, type PointExpression } from 'leaflet';
import type { MarkerData } from '@/assets/data/markers';

export const useMapStore = defineStore({
  id: 'map',
  state: () => ({
    map: null as Map | null,
  }),
  actions: {
    createMap(divId: string) {
      this.map = map(divId, {
        minZoom: MIN_ZOOM,
        maxZoom: MAX_ZOOM,
        zoom: DEFAULT_ZOOM,
        center: MAP_CENTER,
        crs: CRS.Simple,
      });

      const mapbounds = new LatLngBounds(this.unproject([0, 0]), this.unproject(CONTINENT_DIMENSION));
      this.map.setMaxBounds(mapbounds);

      tileLayer(GW2_TILES_URL, {
        minZoom: MIN_ZOOM,
        maxZoom: MAX_ZOOM,
        noWrap: false,
      }).addTo(this.map as Map);
    },
    unproject(point: PointExpression) {
      if (!this.map) {
        throw new Error('Error: map is not defined');
      }
      return this.map.unproject(point, this.map.getMaxZoom());
    },
    addMarker(markerData: MarkerData) {
      const markerOptions = {
        title: markerData.name,
        clickable: true,
        draggable: false,
        icon: GW2_ICON,
      };
      const mapMarker = marker(markerData.coordinates, markerOptions);
      mapMarker.bindPopup(`<h2>${markerData.name}</h2>`);
      mapMarker.addTo(this.map as Map);
    },
    focusMarker(markerData: MarkerData) {
      console.log('Focusing marker');
    },
  },
});
