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
  <div class="menu-button" :class="{ 'menu-button--serif': serif }">{{ buttonText }}</div>
</template>
<style lang="scss" scoped>
.menu-button {
  border-radius: $defaultRadius;
  padding: $smMargin $defaultMargin;
  font-family: $mainFont;
  text-align: center;
  color: $white;
  background-color: $mookieGrey;
  cursor: pointer;
  &--serif {
    font-family: $secondFont;
  }
}
</style>
