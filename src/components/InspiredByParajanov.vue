<script setup>
import { cardValidator } from 'validator';
import InspiredByParajanovBtn from 'components/InspiredByParajanovBtn.vue';
import InspiredByParajanovArticle from 'components/InspiredByParajanovArticle.vue';
import CardArticle from 'components/CardArticle.vue';
import { computed } from 'vue';

const props = defineProps({
  card: cardValidator,
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
  <li class="map-item"  :data-card-id="card.id">
    <InspiredByParajanovBtn :card="card" :onCardBtnClick="onCardBtnClick" :isDraggable="isDraggable" />
    <CardArticle :isShow="isShow" :onCloseBtnClick="onCloseArticleBtnClick">
      <InspiredByParajanovArticle />
    </CardArticle>
  </li>
</template>

<style scoped>
.map-item {
  position: absolute;
  top: 1974px;
  left: 240px;
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
