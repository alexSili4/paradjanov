<script setup>
import { cardValidator } from 'validator';
import TastePreferencesBtn from 'components/TastePreferencesBtn.vue';
import TastePreferencesArticle from 'components/TastePreferencesArticle.vue';

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
      <TastePreferencesBtn :card="card" :data-card-id="card.id" :onCardBtnClick="onCardBtnClick" :isDraggable="isDraggable" />
      <TastePreferencesArticle />
    </div>
  </li>
</template>

<style scoped>
.map-item {
  position: absolute;
  top: 1974px;
  left: 3121px;
  padding: 217px 277px 110px 232px;
}

.map-item-card {
  position: relative;
}

@media screen and (max-width: 1279px) {
  .map-item {
    top: 830px;
    left: 1325px;
    transform-origin: left top;
    transform: scale(0.4277);
  }
}
</style>
