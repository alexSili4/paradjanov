<script setup>
import { cardValidator } from 'validator';
import GlassesFromSilpoBtn from 'components/GlassesFromSilpoBtn.vue';
import { onMounted, ref } from 'vue';
import { intersectionObserverOptions } from 'constants';
import { useRoute } from 'vue-router';

const route = useRoute();

const mapItemRef = ref(null);
const playAnimationRef = ref(false);

const props = defineProps({
  card: cardValidator,
  isMoving: { type: Boolean, required: true },
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
  changeActiveCardId: {
    type: Function,
    required: true,
  },
  cancelMove: {
    type: Function,
    required: true,
  },
  toggleShowGlassesModalWin: {
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

    if (isNewValue) {
      playAnimationRef.value = entry.isIntersecting;
    }

    if (entry.isIntersecting && !props.isMoving) {
      props.changeActiveCardId(props.card.id);
    }

    if (isTargetCard) {
      props.cancelMove();
    }
  });
};

const observer = new IntersectionObserver(playAnimationChange, intersectionObserverOptions);

onMounted(() => {
  observer.observe(mapItemRef.value);
});
</script>

<template>
  <li class="map-item" :data-card-id="card.id" ref="mapItemRef">
    <GlassesFromSilpoBtn :card="card" :isDraggable="isDraggable" :playAnimation="playAnimationRef" :toggleShowGlassesModalWin="toggleShowGlassesModalWin" />
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
