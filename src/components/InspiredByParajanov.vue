<script setup>
import { cardValidator } from 'validator';
import InspiredByParajanovBtn from 'components/InspiredByParajanovBtn.vue';
import InspiredByParajanovArticle from 'components/InspiredByParajanovArticle.vue';
import CardArticle from 'components/CardArticle.vue';
import { computed, onMounted, ref } from 'vue';
import { intersectionObserverOptions } from 'constants';

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
});

const playAnimationChange = (entries) => {
  entries.forEach((entry) => {
    const isNewValue = playAnimationRef.value !== entry.isIntersecting;

    if (isNewValue) {
      playAnimationRef.value = entry.isIntersecting;
      props.changeActiveCardId(props.card.id);
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
    <InspiredByParajanovBtn :card="card" :onCardBtnClick="onCardBtnClick" :isDraggable="isDraggable" :playAnimation="playAnimationRef" />
    <CardArticle :isShow="isShow" :onCloseBtnClick="onCloseArticleBtnClick" :isDesk="isDesk" :onNavBtnClick="onNavBtnClick" :card="card">
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
