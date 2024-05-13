<script setup>
import { cardValidator } from 'validator';
import InspiredByParajanovBtn from 'components/InspiredByParajanovBtn.vue';
import InspiredByParajanovArticle from 'components/InspiredByParajanovArticle.vue';

defineProps({
  card: cardValidator,
});
</script>

<template>
  <li class="map-item">
    <div class="map-item-card">
      <InspiredByParajanovBtn :card="card" />
      <InspiredByParajanovArticle />
    </div>
  </li>
</template>

<style scoped>
.map-item {
  position: absolute;
  top: 1974px;
  left: 240px;
  padding: 77px 263px 70px 44px;
}

.map-item-card {
  position: relative;
}

@media screen and (max-width: 1279px) {
  .map-item {
    top: 820px;
    left: 110px;
    transform-origin: left top;
    transform: scale(0.4277);
  }
}
</style>
