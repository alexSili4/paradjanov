<script setup>
import { cardValidator } from 'validator';
import IngeniousCollagesBtn from 'components/IngeniousCollagesBtn.vue';
import IngeniousCollagesArticle from 'components/IngeniousCollagesArticle.vue';
import CardArticle from 'components/CardArticle.vue';
import { computed } from 'vue';

const props = defineProps({
  card: cardValidator,
  onNavBtnClick: {
    type: Function,
    required: true,
  },
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
    <IngeniousCollagesBtn :card="card" :onCardBtnClick="onCardBtnClick" :isDraggable="isDraggable" />
    <CardArticle :isShow="isShow" :onCloseBtnClick="onCloseArticleBtnClick" :isDesk="isDesk" :onNavBtnClick="onNavBtnClick" :card="card">
      <IngeniousCollagesArticle />
    </CardArticle>
  </li>
</template>

<style scoped>
.map-item {
  position: absolute;
  top: 1154px;
  left: 4563px;
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
