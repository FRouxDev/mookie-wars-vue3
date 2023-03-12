<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { markers } from '@/assets/data/markers';
import MapPopup from './popup/MapPopup.vue';
import 'leaflet/dist/leaflet.css';
import { useMapStore } from '@/stores/map';

const mapStore = useMapStore();

const createMap = () => {
  mapStore.createMap('gw2map');
  mapStore.map?.on('click', (e) => console.log(e));
  markers.forEach((marker) => {
    mapStore.addMarker(marker);
  });
};

onMounted(() => {
  createMap();
});
</script>
<template>
  <div id="gw2map"></div>
  <map-popup
    v-for="marker of markers"
    :video-data="marker"
    :key="marker.refName"
    :ref="marker.refName"
    v-show="false"
  />
</template>

<style lang="scss">
#gw2map {
  width: 100%;
  height: 100%;
}
</style>
