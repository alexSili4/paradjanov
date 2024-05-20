<script setup>
import { cardValidator } from 'validator';
import TastePreferencesBtn from 'components/TastePreferencesBtn.vue';
import TastePreferencesArticle from 'components/TastePreferencesArticle.vue';
import CardArticle from 'components/CardArticle.vue';
import { computed, onMounted, ref } from 'vue';
import { intersectionObserverOptions } from 'constants';
import { useRoute } from 'vue-router';

const route = useRoute();

const mapItemRef = ref(null);
const playAnimationRef = ref(false);

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
  changeActiveCardId: {
    type: Function,
    required: true,
  },
  cancelMove: {
    type: Function,
    required: true,
  },
});

const playAnimationChange = (entries) => {
  entries.forEach((entry) => {
    const { cardId: targetCardId } = entry.target.dataset;
    const { cardId } = route.query;
    const isTargetCard = cardId === targetCardId;
    const isNewValue = playAnimationRef.value !== entry.isIntersecting;
    const shouldChangeCardId = entry.isIntersecting && isNewValue && !props.isMoving && isTargetCard;

    if (shouldChangeCardId) {
      playAnimationRef.value = entry.isIntersecting;
      props.changeActiveCardId(props.card.id);
      props.cancelMove();
    }
  });
};

const observer = new IntersectionObserver(playAnimationChange, intersectionObserverOptions);

onMounted(() => {
  observer.observe(mapItemRef.value);
});

const isShow = computed(() => props.activeArticle === props.card.id);
</script>

<template>
  <li class="map-item" :data-card-id="card.id" ref="mapItemRef">
    <TastePreferencesBtn :card="card" :onCardBtnClick="onCardBtnClick" :isDraggable="isDraggable" :playAnimation="playAnimationRef" />
    <CardArticle :isShow="isShow" :onCloseBtnClick="onCloseArticleBtnClick" :isDesk="isDesk" :onNavBtnClick="onNavBtnClick" :card="card">
      <TastePreferencesArticle />
    </CardArticle>
  </li>
</template>

<style scoped>
.map-item {
  position: absolute;
  top: 1974px;
  left: 3121px;
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
