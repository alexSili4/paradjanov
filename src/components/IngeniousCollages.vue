<script setup>
import { cardValidator } from 'validator';
import IngeniousCollagesBtn from 'components/IngeniousCollagesBtn.vue';
import IngeniousCollagesArticle from 'components/IngeniousCollagesArticle.vue';

defineProps({
  card: cardValidator,
});
</script>

<template>
  <li class="map-item">
    <div class="map-item-card">
      <IngeniousCollagesBtn :card="card" />
      <IngeniousCollagesArticle />
    </div>
  </li>
</template>

<style scoped>
.map-item {
  position: absolute;
  top: 1154px;
  left: 4563px;
  padding: 55px 48px 214px 281px;
}

.map-item-card {
  position: relative;
}

@media screen and (max-width: 1279px) {
  .map-item {
    top: 500px;
    left: 1970px;
    transform-origin: left top;
    transform: scale(0.4277);
  }
}
</style>
