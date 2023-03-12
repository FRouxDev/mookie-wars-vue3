<script setup lang="ts">
import type { MarkerData } from '@/assets/data/markers';
import type { PropType } from 'vue';

defineProps({
  videoData: {
    type: Object as PropType<MarkerData>,
    required: true,
  },
});
</script>
<template>
  <div>{{ videoData.name }}</div>
</template>
<style lang="scss" scoped></style>
