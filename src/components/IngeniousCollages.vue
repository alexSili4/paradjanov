<script setup>
import { cardValidator } from 'validator';
import IngeniousCollagesBtn from 'components/IngeniousCollagesBtn.vue';
import IngeniousCollagesArticle from 'components/IngeniousCollagesArticle.vue';

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
      <IngeniousCollagesBtn :card="card" :data-card-id="card.id" :onCardBtnClick="onCardBtnClick" :isDraggable="isDraggable" />
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
