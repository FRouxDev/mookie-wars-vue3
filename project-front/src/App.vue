<script setup lang="ts">
import MapMenu from '@/components/map/MapMenu.vue';
import MapDisplay from '@/components/map/MapDisplay.vue';
</script>
<template>
  <div class="app__wrapper">
    <div class="sidemenu">
      <MapMenu />
    </div>
    <div class="map">
      <MapDisplay />
    </div>
  </div>
</template>

<style lang="scss">
.app__wrapper {
  margin: 0 auto;
  padding: 0;
  width: 100%;
  display: flex;
  height: 100vh;
}

.sidemenu {
  min-width: 320px;
  padding: 2 * $defaultMargin;
  text-align: center;
  background-color: $mookieBeige;
}

.map {
  width: 100%;
  background-color: $mookieGrey;
}
</style>
