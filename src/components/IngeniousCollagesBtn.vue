<script setup>
import { cardValidator } from 'validator';
import GrapeIcon from 'icons/ingeniousCollages/grape.svg?component';
import LeafIcon from 'icons/ingeniousCollages/leaf.svg?component';
import MainGrapeIcon from 'icons/ingeniousCollages/main-grape.svg?component';
import NavArroWIcon from 'icons/ingeniousCollages/nav-arrow.svg?component';
import GrapesIcon from 'icons/ingeniousCollages/grapes.svg?component';
import SmallGrapeIcon from 'icons/ingeniousCollages/small-grape.svg?component';
import ingeniousCollages from '../animations/ingeniousCollages.json';
import { Vue3Lottie } from 'vue3-lottie';

defineProps({
  card: cardValidator,
  playAnimation: {
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
});
</script>

<template>
  <div class="map-item-card">
    <div class="card-title-wrap">
      <p class="card-title">{{ card.title }}</p>
      <button type="button" class="card-btn card-article-btn" @click="onCardBtnClick" :disabled="isDraggable"></button>
      <span class="icon-btn-wrap">
        <LeafIcon class="leaf-icon btn-icon" />
        <MainGrapeIcon class="main-grape-icon btn-icon" />
        <GrapeIcon class="grape-icon btn-icon" />
        <NavArroWIcon class="nav-arrow-icon btn-icon" />
        <span class="card-number">{{ card.number }}</span>
      </span>
    </div>
    <GrapesIcon class="grapes-icon" />
    <SmallGrapeIcon class="small-grape-icon" />
    <Vue3Lottie :autoPlay="playAnimation" :animationData="ingeniousCollages" class="animation-item" :height="card.animation[0].height" :width="card.animation[0].width" />
  </div>
</template>

<style scoped>
.map-item-card {
  position: relative;
  padding: 256px 228px 281px 548px;
}

.animation-item {
  position: absolute;
  top: -83px;
  left: 103px;
}

.card-title-wrap {
  position: relative;
  width: 665px;
  height: 283px;
  background-image: url('icons/ingeniousCollages/title-bg.svg');
  background-repeat: no-repeat;
  background-size: 665px 283px;
  background-position: 0 0;
}

.card-title {
  position: absolute;
  top: 42px;
  left: 286px;
  color: #353b3f;
  font-family: Shnobel;
  font-size: 90px;
  font-weight: 400;
  line-height: 1.2;
  text-transform: uppercase;
}

.card-btn {
  position: absolute;
  z-index: 10;
  top: 25px;
  left: 30px;
  width: calc(100% - 40px);
  height: 245px;
  padding: 0;
  border: none;
  background-color: transparent;
}

.icon-btn-wrap {
  position: absolute;
  top: -140px;
  left: 531px;
  pointer-events: none;
}

.leaf-icon {
  position: absolute;
  top: 183px;
  left: 28px;
  display: block;
}

.btn-icon {
  transition:
    transform var(--transition-duration-and-func),
    opacity var(--transition-duration-and-func);
}

.main-grape-icon {
  position: relative;
  display: block;
}

.grape-icon {
  position: absolute;
  top: 83px;
  left: 19px;
  display: block;
}

.nav-arrow-icon {
  position: absolute;
  top: 132px;
  left: 119px;
  display: block;
  transform-origin: center top;
}

.card-number {
  position: absolute;
  top: 126px;
  left: 146px;
  color: var(--white-color);
  font-family: Shnobel;
  font-size: 60px;
  font-weight: 400;
  line-height: 1.3;
  transition: opacity var(--transition-duration-and-func);
}

.small-grape-icon {
  position: absolute;
  top: 499px;
  left: 249px;
  display: block;
}

.grapes-icon {
  position: absolute;
  top: 498px;
  left: 663px;
  display: block;
}

.card-btn:is(:hover, :focus) {
  cursor:
    url('icons/cursor-pointer.svg') 25 0,
    auto;
}

.card-btn:not(:is(:hover, :focus)) ~ .icon-btn-wrap > .nav-arrow-icon {
  transform: rotate(-90deg);
  opacity: 0;
}

.card-btn:is(:hover, :focus) ~ .icon-btn-wrap > .leaf-icon {
  transform: translateY(5px);
}

.card-btn:is(:hover, :focus) ~ .icon-btn-wrap > .main-grape-icon {
  transform: rotate(7.57deg);
}

.card-btn:is(:hover, :focus) ~ .icon-btn-wrap > .grape-icon {
  transform: rotate(10.25deg);
}

@media screen and (min-width: 1280px) {
  .card-btn:is(:hover, :focus) ~ .icon-btn-wrap > .card-number {
    opacity: 0;
  }
}

@media screen and (max-width: 1279px) {
  .nav-arrow-icon {
    display: none;
  }
}
</style>
