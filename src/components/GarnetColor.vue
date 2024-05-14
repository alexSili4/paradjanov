<script setup>
import { cardValidator } from 'validator';
import GarnetColorBtn from 'components/GarnetColorBtn.vue';
import GarnetColorArticle from 'components/GarnetColorArticle.vue';

defineProps({
  card: cardValidator,
  onCardBtnClick: {
    type: Function,
    required: true,
  },
  isDraggable: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <li class="map-item">
    <div class="map-item-card">
      <GarnetColorBtn :card="card" :data-card-id="card.id" :onCardBtnClick="onCardBtnClick" :isDraggable="isDraggable" />
      <GarnetColorArticle />
    </div>
  </li>
</template>

<style scoped>
.map-item {
  position: absolute;
  top: 1974px;
  left: 4562px;
  padding: 119px 0px 4px 550px;
}

.map-item-card {
  position: relative;
}

@media screen and (max-width: 1279px) {
  .map-item {
    /* top: 830px; */
    /* left: 1325px; */
    transform-origin: left top;
    transform: scale(0.4277);
  }
}
</style>
