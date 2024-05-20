<script setup>
import { cardValidator } from 'validator';
import GlassesFromSilpoBtn from 'components/GlassesFromSilpoBtn.vue';
import GlassesFromSilpoArticle from 'components/GlassesFromSilpoArticle.vue';
import CardArticle from 'components/CardArticle.vue';
import { computed } from 'vue';

const props = defineProps({
  card: cardValidator,
  isDesk: { type: Boolean, required: true },
  onNavBtnClick: {
    type: Function,
    required: true,
  },
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
    <GlassesFromSilpoBtn :card="card" :onCardBtnClick="onCardBtnClick" :isDraggable="isDraggable" />
    <CardArticle :isShow="isShow" :onCloseBtnClick="onCloseArticleBtnClick" :isDesk="isDesk" :onNavBtnClick="onNavBtnClick" :card="card">
      <GlassesFromSilpoArticle />
    </CardArticle>
  </li>
</template>

<style scoped>
.map-item {
  position: absolute;
  top: 334px;
  left: 3121px;
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
