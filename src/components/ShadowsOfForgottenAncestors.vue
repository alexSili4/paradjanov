<script setup>
import { cardValidator } from 'validator';
import ShadowsOfForgottenAncestorsBtn from 'components/ShadowsOfForgottenAncestorsBtn.vue';
import ShadowsOfForgottenAncestorsArticle from 'components/ShadowsOfForgottenAncestorsArticle.vue';

defineProps({
  card: cardValidator,
});
</script>

<template>
  <li class="map-item">
    <div class="map-item-card">
      <ShadowsOfForgottenAncestorsBtn :card="card" />
      <ShadowsOfForgottenAncestorsArticle />
      <div class="no-hover"></div>
      <div></div>
    </div>
  </li>
</template>

<style scoped>
.map-item {
  position: absolute;
  top: 1154px;
  left: 1681px;
  padding: 8px 249px 78px 356px;
}

.map-item-card {
  position: relative;
}

@media screen and (max-width: 1279px) {
  .map-item {
    top: 480px;
    left: 725px;
    transform-origin: left top;
    transform: scale(0.4277);
  }
}
</style>
