<script setup>
import { cardValidator } from 'validator';
// import ShadowsOfForgottenAncestorsBtn from 'components/ShadowsOfForgottenAncestorsBtn.vue';
// import ShadowsOfForgottenAncestorsArticle from 'components/ShadowsOfForgottenAncestorsArticle.vue';

defineProps({
  card: cardValidator,
  isDesk: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <li class="map-item">
    <div class="map-item-card">
      <!-- <ShadowsOfForgottenAncestorsBtn :isDesk="isDesk" :card="card" /> -->
      <!-- <ShadowsOfForgottenAncestorsArticle /> -->
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
    /* transform-origin: left center; */
    /* transform: scale(); */
  }
}
</style>
