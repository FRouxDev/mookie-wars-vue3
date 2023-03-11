<script setup lang="ts">
import { onMounted } from 'vue';
import {
  MAP_CENTER,
  DEFAULT_ZOOM,
  MIN_ZOOM,
  MAX_ZOOM,
  CONTINENT_DIMENSION,
  GW2_ICON,
  GW2_TILES_URL,
} from '@/config/map.config';
import { markers } from '@/assets/data/markers';
// import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet';
import { LatLngBounds } from 'leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const createMap = () => {
  const map = L.map('gw2map', {
    minZoom: MIN_ZOOM,
    maxZoom: MAX_ZOOM,
    zoom: DEFAULT_ZOOM,
    center: MAP_CENTER,
    crs: L.CRS.Simple,
  });

  const mapbounds = new LatLngBounds(
    map.unproject([0, 0], map.getMaxZoom()),
    map.unproject(CONTINENT_DIMENSION, map.getMaxZoom()),
  );
  map.setMaxBounds(mapbounds);

  // Add map tiles using the [[API:Tile service]]
  L.tileLayer(GW2_TILES_URL, {
    minZoom: MIN_ZOOM,
    maxZoom: MAX_ZOOM,
    noWrap: false,
  }).addTo(map);

  map.on('click', (e) => console.log(e));

  markers.forEach((marker) => {
    const markerOptions = {
      title: marker.name,
      clickable: true,
      draggable: false,
      icon: GW2_ICON,
    };
    const mapMarker = L.marker(marker.coordinates, markerOptions);
    mapMarker.addTo(map);
  });
};

onMounted(() => {
  createMap();
});
</script>
<template>
  <div id="gw2map"></div>
</template>

<style lang="scss">
#gw2map {
  width: 100%;
  height: 100%;
}
</style>
