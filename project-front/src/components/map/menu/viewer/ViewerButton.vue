<script setup lang="ts">
defineProps({
  buttonText: String,
  disabled: {
    type: Boolean,
    default: false,
  },
  serif: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <div class="viewer-button" :class="{ 'viewer-button--serif': serif }">{{ buttonText }}</div>
</template>
<style lang="scss" scoped>
.viewer-button {
  border: 1px solid $mookieBrown;
  border-radius: $defaultRadius;
  padding: $smMargin $defaultMargin;
  font-family: $mainFont;
  text-align: center;
  color: $mookieBrown;
  background: transparent;
  cursor: pointer;
  &--serif {
    font-family: $secondFont;
  }
}

.viewer-button:hover {
  background-color: $mookieBrown;
  color: $white;
}
</style>
