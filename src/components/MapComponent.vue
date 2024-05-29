<script setup>
import NavBar from 'components/NavBar.vue';
import ParajanovsLife from 'components/ParajanovsLife.vue';
import ShadowsOfForgottenAncestors from 'components/ShadowsOfForgottenAncestors.vue';
import { cards } from 'constants';
import { ref, onMounted, computed, watch, onBeforeMount } from 'vue';
import { getPositionProps, getContentGeometry, getScale, getScaleOnResizeWindow, setFocusOnActiveCard, getPrevAndNextCardId } from 'utils';
import InspiredByParajanov from 'components/InspiredByParajanov.vue';
import TastePreferences from 'components/TastePreferences.vue';
import GlassesFromSilpo from 'components/GlassesFromSilpo.vue';
import IngeniousCollages from 'components/IngeniousCollages.vue';
import GarnetColor from 'components/GarnetColor.vue';
import { useRoute } from 'vue-router';
import router from 'router';
import CursorClue from './CursorClue.vue';

const route = useRoute();

const props = defineProps({
  isDesk: {
    type: Boolean,
    required: true,
  },
  toggleShowGlassesModalWin: {
    type: Function,
    required: true,
  },
});

document.addEventListener('mouseup', onMouseUp);
document.addEventListener('touchend', onTouchend);
window.addEventListener('resize', onResizeWindow);

const mapRef = ref(null);
const mapOriginalWidthRef = ref(null);
const mapOriginalHeightRef = ref(null);
const showAllMap = ref(false);
const offsetXRef = ref(0);
const offsetYRef = ref(0);
const prevLeftRef = ref(0);
const prevTopRef = ref(0);
const leftRef = ref(0);
const topRef = ref(0);
const scaleRef = ref(1);
const isDraggableRef = ref(false);
const activeArticleRef = ref(null);
const activeCardIdRef = ref(null);
const isOpenMenuRef = ref(false);
const isMovingRef = ref(false);
const nextCardIdRef = ref(null);
const prevCardIdRef = ref(null);

onBeforeMount(() => {
  const defaultCardId = cards[0].id;
  const { prevCardId, nextCardId } = getPrevAndNextCardId({ cardId: defaultCardId, cards });

  activeCardIdRef.value = defaultCardId;
  prevCardIdRef.value = prevCardId;
  nextCardIdRef.value = nextCardId;
});

onMounted(() => {
  const targetElement = mapRef.value;
  const { height, width } = getContentGeometry(targetElement);
  mapOriginalWidthRef.value = width;
  mapOriginalHeightRef.value = height;
});

const changeActiveCardId = (cardId) => {
  if (showAllMap.value || isMovingRef.value) {
    return;
  }

  router.push({ path: '/', query: { cardId } });
};

const onQueriesChangeDependencies = () => route.query;
const onQueriesChange = ({ cardId }) => {
  const { prevCardId, nextCardId } = getPrevAndNextCardId({ cardId, cards });
  activeCardIdRef.value = cardId;
  prevCardIdRef.value = prevCardId;
  nextCardIdRef.value = nextCardId;
};
watch(onQueriesChangeDependencies, onQueriesChange);

const onActiveCardIdChangeDependencies = () => [activeCardIdRef.value, mapRef.value];
const onActiveCardIdChange = () => {
  const container = mapRef.value;
  if (!container) {
    return;
  }

  const { topOffset, leftOffset } = setFocusOnActiveCard({ container, activeCardId: activeCardIdRef.value, top: topRef.value, left: leftRef.value });

  if (!isDraggableRef.value) {
    topRef.value = topOffset;
    leftRef.value = leftOffset;
  }
};
watch(onActiveCardIdChangeDependencies, onActiveCardIdChange);

function onResizeWindow() {
  const targetElement = mapRef.value;
  const { innerHeight } = window;
  const { height } = getContentGeometry(targetElement);
  const gap = topRef.value + height - innerHeight;

  if (gap <= 0) {
    const { top } = getContentGeometry(targetElement);
    topRef.value = top - gap;
  }

  if (scaleRef.value !== 1) {
    const scale = getScaleOnResizeWindow({
      width: mapOriginalWidthRef.value,
      height: mapOriginalHeightRef.value,
    });

    scaleRef.value = scale;
    topRef.value = 0;
    leftRef.value = 0;
  }
}

function onMouseMove(e) {
  isDraggableRef.value = true;
  const targetElement = mapRef.value;
  const { clientX, clientY } = e;

  const { shouldUpdatePositionTop, shouldUpdatePositionLeft, leftPosition, topPosition } = getPositionProps({
    element: targetElement,
    offsetY: offsetYRef.value,
    offsetX: offsetXRef.value,
    clientX,
    clientY,
  });

  if (shouldUpdatePositionLeft) {
    leftRef.value = leftPosition;
  }

  if (shouldUpdatePositionTop) {
    topRef.value = topPosition;
  }
}

function onMouseDown(e) {
  const cardBtn = e.target.closest('.card-article-btn');

  if (activeArticleRef.value || cardBtn) {
    return;
  }

  const targetElement = mapRef.value;
  const { left, top } = getContentGeometry(targetElement);
  const { clientX, clientY } = e;

  document.addEventListener('mousemove', onMouseMove);
  offsetXRef.value = clientX - left;
  offsetYRef.value = clientY - top;
}

function onTouchmove(e) {
  const cardBtn = e.target.closest('.card-article-btn');

  if (activeArticleRef.value || cardBtn) {
    return;
  }

  const targetElement = mapRef.value;
  const { clientX, clientY } = e.changedTouches[0];

  const { shouldUpdatePositionTop, shouldUpdatePositionLeft, leftPosition, topPosition } = getPositionProps({
    element: targetElement,
    offsetY: offsetYRef.value,
    offsetX: offsetXRef.value,
    clientX,
    clientY,
  });

  if (shouldUpdatePositionLeft) {
    leftRef.value = leftPosition;
  }

  if (shouldUpdatePositionTop) {
    topRef.value = topPosition;
  }
}

function onTouchstart(e) {
  const targetElement = mapRef.value;
  isDraggableRef.value = true;
  const { left, top } = getContentGeometry(targetElement);
  const { clientX, clientY } = e.changedTouches[0];

  document.addEventListener('touchmove', onTouchmove);
  offsetXRef.value = clientX - left;
  offsetYRef.value = clientY - top;
}

function onMouseUp() {
  document.removeEventListener('mousemove', onMouseMove);
  isDraggableRef.value = false;
}

function onTouchend() {
  document.removeEventListener('touchmove', onTouchmove);
  isDraggableRef.value = false;
}

const onCloseArticleBtnClick = (e) => {
  e.currentTarget.blur();
  activeArticleRef.value = null;
};

const onCardBtnClick = (e) => {
  e.currentTarget.blur();
  const { cardId } = e.target.closest('.map-item').dataset;
  activeArticleRef.value = cardId;
};

const toggleShowAllMap = (e) => {
  e.currentTarget.blur();
  showAllMap.value = !showAllMap.value;

  if (showAllMap.value) {
    prevLeftRef.value = leftRef.value;
    prevTopRef.value = topRef.value;
  }

  const scale = showAllMap.value ? getScale(mapRef.value) : 1;
  scaleRef.value = scale;

  topRef.value = showAllMap.value ? 0 : prevTopRef.value;
  leftRef.value = showAllMap.value ? 0 : prevLeftRef.value;
};

const onZoomBtnClick = (e) => {
  isOpenMenuRef.value = !isOpenMenuRef.value;
  e.currentTarget.blur();
};

const cancelMove = () => {
  isMovingRef.value = false;
};

const onNavBtnClick = (e) => {
  e.currentTarget.blur();
  isMovingRef.value = true;
  const { cardId } = e.currentTarget.dataset;
  router.push({ path: '/', query: { cardId } });

  if (!props.isDesk) {
    isOpenMenuRef.value = false;
  }

  if (activeArticleRef.value) {
    activeArticleRef.value = cardId;
  }
};

const getMapInlineStyles = () => {
  const scale = props.isDesk ? scaleRef.value : 1;
  const cursor = activeArticleRef.value ? 'auto' : 'move';

  return {
    top: `${topRef.value}px`,
    left: `${leftRef.value}px`,
    cursor: isDraggableRef.value ? 'grabbing' : cursor,
    transform: `scale(${scale})`,
  };
};

const getMapClassNames = () => ['map', { 'map-transform': !isDraggableRef.value }];

const mapInlineStyles = computed(getMapInlineStyles);
const mapClassNames = computed(getMapClassNames);
</script>

<template>
  <div class="map-container">
    <CursorClue :isDesk="isDesk" />
    <ul :class="mapClassNames" @mousedown="onMouseDown" @touchstart="onTouchstart" ref="mapRef" :style="mapInlineStyles">
      <ParajanovsLife
        :isDesk="isDesk"
        :card="cards[0]"
        :onCardBtnClick="onCardBtnClick"
        :isDraggable="isDraggableRef"
        :onCloseArticleBtnClick="onCloseArticleBtnClick"
        :activeArticle="activeArticleRef"
        :onNavBtnClick="onNavBtnClick"
        :changeActiveCardId="changeActiveCardId"
        :cancelMove="cancelMove"
        :isMoving="isMovingRef"
        :isOpenMenu="isOpenMenuRef"
        :onMenuBtnClick="onZoomBtnClick"
      />
      <ShadowsOfForgottenAncestors
        :card="cards[1]"
        :onCardBtnClick="onCardBtnClick"
        :isDraggable="isDraggableRef"
        :onCloseArticleBtnClick="onCloseArticleBtnClick"
        :activeArticle="activeArticleRef"
        :isDesk="isDesk"
        :onNavBtnClick="onNavBtnClick"
        :changeActiveCardId="changeActiveCardId"
        :cancelMove="cancelMove"
        :isMoving="isMovingRef"
        :isOpenMenu="isOpenMenuRef"
        :onMenuBtnClick="onZoomBtnClick"
      />
      <InspiredByParajanov
        :card="cards[2]"
        :onCardBtnClick="onCardBtnClick"
        :isDraggable="isDraggableRef"
        :onCloseArticleBtnClick="onCloseArticleBtnClick"
        :activeArticle="activeArticleRef"
        :isDesk="isDesk"
        :onNavBtnClick="onNavBtnClick"
        :changeActiveCardId="changeActiveCardId"
        :cancelMove="cancelMove"
        :isMoving="isMovingRef"
        :isOpenMenu="isOpenMenuRef"
        :onMenuBtnClick="onZoomBtnClick"
      />
      <TastePreferences
        :card="cards[3]"
        :onCardBtnClick="onCardBtnClick"
        :isDraggable="isDraggableRef"
        :onCloseArticleBtnClick="onCloseArticleBtnClick"
        :activeArticle="activeArticleRef"
        :isDesk="isDesk"
        :onNavBtnClick="onNavBtnClick"
        :changeActiveCardId="changeActiveCardId"
        :cancelMove="cancelMove"
        :isMoving="isMovingRef"
        :isOpenMenu="isOpenMenuRef"
        :onMenuBtnClick="onZoomBtnClick"
      />
      <GlassesFromSilpo
        :card="cards[4]"
        :onCardBtnClick="onCardBtnClick"
        :isDraggable="isDraggableRef"
        :onCloseArticleBtnClick="onCloseArticleBtnClick"
        :activeArticle="activeArticleRef"
        :isDesk="isDesk"
        :onNavBtnClick="onNavBtnClick"
        :changeActiveCardId="changeActiveCardId"
        :cancelMove="cancelMove"
        :isMoving="isMovingRef"
        :toggleShowGlassesModalWin="toggleShowGlassesModalWin"
        :isOpenMenu="isOpenMenuRef"
      />
      <IngeniousCollages
        :card="cards[5]"
        :onCardBtnClick="onCardBtnClick"
        :isDraggable="isDraggableRef"
        :onCloseArticleBtnClick="onCloseArticleBtnClick"
        :activeArticle="activeArticleRef"
        :isDesk="isDesk"
        :onNavBtnClick="onNavBtnClick"
        :changeActiveCardId="changeActiveCardId"
        :cancelMove="cancelMove"
        :isMoving="isMovingRef"
        :isOpenMenu="isOpenMenuRef"
        :onMenuBtnClick="onZoomBtnClick"
      />
      <GarnetColor
        :card="cards[6]"
        :onCardBtnClick="onCardBtnClick"
        :isDraggable="isDraggableRef"
        :onCloseArticleBtnClick="onCloseArticleBtnClick"
        :activeArticle="activeArticleRef"
        :isDesk="isDesk"
        :onNavBtnClick="onNavBtnClick"
        :changeActiveCardId="changeActiveCardId"
        :cancelMove="cancelMove"
        :isMoving="isMovingRef"
        :onMenuBtnClick="onZoomBtnClick"
        :isOpenMenu="isOpenMenuRef"
      />
    </ul>
  </div>
  <NavBar
    :cards="cards"
    :toggleShowAllMap="toggleShowAllMap"
    :isDesk="isDesk"
    :activeCardId="activeCardIdRef"
    :showArticle="Boolean(activeArticleRef)"
    :onNavBtnClick="onNavBtnClick"
    :onZoomBtnClick="onZoomBtnClick"
    :isOpenMenu="isOpenMenuRef"
    :prevCardId="prevCardIdRef"
    :nextCardId="nextCardIdRef"
  />
</template>

<style scoped>
.map-container {
  position: relative;
  z-index: 1;
  height: 100vh;
  overflow: hidden;
}

.map {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 2669.77px;
  height: 1380px;
  background-image: url('icons/map/sheep.svg'), url('icons/map/inspired-by-parajanov.svg'), url('icons/map/quote.svg'), url('icons/map/quote-2.svg'), url('icons/map/path-06-mobile.svg'),
    url('icons/map/path-05-mobile.svg'), url('icons/map/path-04-mobile.svg'), url('icons/map/path-03-mobile.svg'), url('icons/map/path-02-mobile.svg'), url('icons/map/path-01-mobile.svg'),
    url('icons/map/inscriptions-mobile.svg'), url('icons/map/stars-mobile.svg'), url('images/map/map-bg-mobile.jpg');
  background-size:
    97.8px 72.7px,
    210.4px 149.6px,
    231.7px 55.7px,
    245.8px 53.4px,
    375.2px 417.94px,
    698.4px 412.39px,
    404.39px 563.63px,
    1017.89px 206.34px,
    372.94px 343.74px,
    697.1px 455.62px,
    2669.77px 1380px,
    2670px 1380px,
    2669.77px 1380px;
  background-position:
    top 300px left 2200px,
    top 185px left 2270px,
    top 660px left 1450px,
    top 930px left 900px,
    top 715.87px left 1913.33px,
    top 214.53px left 1759.11px,
    top 388.3px left 1346.96px,
    top 1087.92px left 448.07px,
    top 679.18px left 526.26px,
    top 212.73px left 425.07px,
    0 0,
    0 0,
    0 0;
  background-repeat: no-repeat;
  transform-origin: left top;
}

.map-transform {
  transition:
    top var(--smooth-transition),
    left var(--smooth-transition),
    transform var(--smooth-transition);
}

@media screen and (min-width: 1280px) {
  .map {
    width: 6243px;
    height: 3227px;
    background-image: url('icons/map/sheep.svg'), url('icons/map/inspired-by-parajanov.svg'), url('icons/map/quote.svg'), url('icons/map/quote-2.svg'), url('icons/map/path-06-desk.svg'),
      url('icons/map/path-05-desk.svg'), url('icons/map/path-04-desk.svg'), url('icons/map/path-03-desk.svg'), url('icons/map/path-02-desk.svg'), url('icons/map/path-01-desk.svg'),
      url('icons/map/inscriptions-desk.svg'), url('icons/map/stars-desk.svg'), url('images/map/map-bg-desk.jpg');
    background-size:
      255.48px 181.68px,
      526px 374px,
      579.27px 139.37px,
      614.51px 133.63px,
      877.36px 977.32px,
      1633.13px 964.34px,
      945.62px 1318px,
      2380.24px 482.51px,
      872.08px 803.8px,
      1630.1px 1065.43px,
      6243px 3227px,
      6244px 3228px,
      6243px 3227px;
    background-position:
      top 713px left 5144px,
      top 408px left 5275px,
      top 1556px left 3412px,
      top 2166px left 2087px,
      top 1674px left 4474.14px,
      top 501.67px left 4113.5px,
      top 908px left 3149.75px,
      top 2544px left 1047.76px,
      top 1588.2px left 1230.61px,
      top 497.46px left 994px,
      0 0,
      0 0,
      0 0;
  }
}
</style>
