<script setup>
import { cardValidator } from 'validator';
import GlassesFromSilpoBtn from 'components/GlassesFromSilpoBtn.vue';
import GlassesFromSilpoArticle from 'components/GlassesFromSilpoArticle.vue';

defineProps({
  card: cardValidator,
});
</script>

<template>
  <li class="map-item">
    <div class="map-item-card">
      <GlassesFromSilpoBtn :card="card" />
      <GlassesFromSilpoArticle />
    </div>
  </li>
</template>

<style scoped>
.map-item {
  position: absolute;
  top: 334px;
  left: 3121px;
  padding: 138px 309px 0px 204px;
}

.map-item-card {
  position: relative;
}

@media screen and (max-width: 1279px) {
  .map-item {
    top: 130px;
    left: 1340px;
    transform-origin: left top;
    transform: scale(0.4277);
  }
}
</style>
