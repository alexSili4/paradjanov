<script setup>
import ParajanovsLifeBtn from 'components/ParajanovsLifeBtn.vue';
import ParajanovsLifeArticle from 'components/ParajanovsLifeArticle.vue';
import { cardValidator } from 'validator';
import CardArticle from 'components/CardArticle.vue';
import { computed, onMounted, ref } from 'vue';
import { intersectionObserverOptions } from 'constants';
import { useRoute } from 'vue-router';
import navSheep from '../animations/sheep.json';
import pointer from '../animations/pointer.json';
import { Vue3Lottie } from 'vue3-lottie';

const route = useRoute();

const mapItemRef = ref(null);
const playAnimationRef = ref(false);

const props = defineProps({
  card: cardValidator,
  onMenuBtnClick: {
    type: Function,
    required: true,
  },
  isMoving: { type: Boolean, required: true },
  isOpenMenu: { type: Boolean, required: true },
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
  isDesk: {
    type: Boolean,
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

const isShow = computed(() => props.activeArticle === props.card.id);
</script>

<template>
  <li class="map-item" :data-card-id="card.id" ref="mapItemRef">
    <Vue3Lottie :animationData="pointer" class="pointer-animation" />
    <Vue3Lottie :animationData="navSheep" class="nav-sheep-animation" />
    <ParajanovsLifeBtn :isDesk="isDesk" :card="card" :onCardBtnClick="onCardBtnClick" :isDraggable="isDraggable" :playAnimation="playAnimationRef" />
    <CardArticle :isShow="isShow" :onCloseBtnClick="onCloseArticleBtnClick" :isDesk="isDesk" :onNavBtnClick="onNavBtnClick" :card="card" :isOpenMenu="isOpenMenu" :onMenuBtnClick="onMenuBtnClick">
      <ParajanovsLifeArticle />
    </CardArticle>
  </li>
</template>

<style scoped>
.map-item {
  position: absolute;
  top: 143px;
  left: 103px;
}

@media screen and (min-width: 1280px) {
  .map-item {
    top: 334px;
    left: 241px;
  }

  .nav-sheep-animation {
    position: absolute;
    top: 67px;
    left: 753px;
    width: 1683.57px;
    height: 1200px;
  }

  .pointer-animation {
    position: absolute;
    top: 550px;
    left: 1150px;
    width: 158.68px;
    height: 138px;
  }
}

@media screen and (max-width: 1279px) {
  .nav-sheep-animation {
    display: none;
  }

  .pointer-animation {
    display: none;
  }
}
</style>
