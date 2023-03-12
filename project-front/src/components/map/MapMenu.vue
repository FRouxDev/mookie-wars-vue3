<script setup lang="ts">
import MenuButton from './menu/MenuButton.vue';
import ViewerButton from './menu/viewer/ViewerButton.vue';
</script>
<template>
  <div class="menu">
    <img src="/img/logo_recits.png" />
    <hr class="menu__divider" />
    <menu-button class="menu__button" button-text="Tyrie Centrale" />
    <menu-button class="menu__button" button-text="Cantha" />
    <hr class="menu__divider" />
    <h3 class="menu__subtitle">Récits d'aventure</h3>
    <viewer-button class="menu__button" button-text="La Vallée des Esprits" />
    <viewer-button class="menu__button" button-text="Le Passage de la Rédemption" />
    <viewer-button class="menu__button" button-text="La Forteresse des Fidèles" />
  </div>
</template>
<style lang="scss" scoped>
.menu {
  &__divider {
    border: none;
    height: 1px;
    background-color: $mookieBrown;
    margin: $lMargin;
    opacity: $dividerOpacity;
  }
  &__subtitle {
    font-family: $mainFont;
    font-weight: 700;
    color: $mookieBrown;
    font-size: $mediumSize;
  }
  &__button {
    margin: $defaultMargin $lMargin;
  }
}
</style>
