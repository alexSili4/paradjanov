<script setup>
import { cardValidator } from 'validator';
import GarnetColorBtn from 'components/GarnetColorBtn.vue';
import GarnetColorArticle from 'components/GarnetColorArticle.vue';
import CardArticle from 'components/CardArticle.vue';
import { computed } from 'vue';

const props = defineProps({
  card: cardValidator,
  isDesk: { type: Boolean, required: true },
  activeArticle: {
    type: [String, null],
    required: true,
  },
  onCloseArticleBtnClick: {
    type: Function,
    required: true,
  },
  onCardBtnClick: {
    type: Function,
    required: true,
  },
  isDraggable: {
    type: Boolean,
    required: true,
  },
});

const isShow = computed(() => props.activeArticle === props.card.id);
</script>

<template>
  <li class="map-item" :data-card-id="card.id">
    <GarnetColorBtn :card="card" :onCardBtnClick="onCardBtnClick" :isDraggable="isDraggable" />
    <CardArticle :isShow="isShow" :onCloseBtnClick="onCloseArticleBtnClick" :isDesk="isDesk">
      <GarnetColorArticle />
    </CardArticle>
  </li>
</template>

<style scoped>
.map-item {
  position: absolute;
  top: 1974px;
  left: 4562px;
}

@media screen and (max-width: 1279px) {
  .map-item {
    top: 840px;
    left: 1950px;
    transform-origin: left top;
    transform: scale(0.4277);
  }
}
</style>
