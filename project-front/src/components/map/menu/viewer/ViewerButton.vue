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
  <div class="viewer-button" :class="{ 'viewer-button--serif': serif }">
    <div class="viewer-button__icon">
      <img src="/img/raid-icon.png" class="viewer-button__icon__image" />
    </div>
    <div>
      {{ buttonText }}
    </div>
  </div>
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
  display: flex;
  align-items: center;
  justify-content: center;
  &--serif {
    font-family: $secondFont;
  }
  &__icon {
    height: 24px;
    padding-top: 2px;
    margin-right: 4px;
    &__image {
      width: 16px;
    }
  }
}

.viewer-button:hover {
  background-color: $mookieBrown;
  color: $white;
}
</style>
