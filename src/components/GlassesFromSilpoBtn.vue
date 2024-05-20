<script setup>
import { cardValidator } from 'validator';
import GrapeIcon from 'icons/glassesFromSilpo/grape.svg?component';
import LeafIcon from 'icons/glassesFromSilpo/leaf.svg?component';
import MainGrapeIcon from 'icons/glassesFromSilpo/main-grape.svg?component';
import NavArroWIcon from 'icons/glassesFromSilpo/nav-arrow.svg?component';
import BakeIcon from 'icons/glassesFromSilpo/bake.svg?component';
import CometIcon from 'icons/glassesFromSilpo/comet.svg?component';
import TowelIcon from 'icons/glassesFromSilpo/towel.svg?component';
import glassesFromSilpo110 from '../animations/glassesFromSilpo110.json';
import glassesFromSilpo250 from '../animations/glassesFromSilpo250.json';
import glassesFromSilpo350 from '../animations/glassesFromSilpo350.json';

defineProps({
  card: cardValidator,
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
    <CometIcon class="comet-icon" />
    <TowelIcon class="towel-icon" />
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
    <Vue3Lottie :autoPlay="true" :animationData="glassesFromSilpo350" class="animation-glasses-from-silpo-350" :height="card.animation[2].height" :width="card.animation[2].width" />
    <Vue3Lottie :autoPlay="true" :animationData="glassesFromSilpo110" class="animation-glasses-from-silpo-110" :height="card.animation[0].height" :width="card.animation[0].width" />
    <Vue3Lottie :autoPlay="true" :animationData="glassesFromSilpo250" class="animation-glasses-from-silpo-250" :height="card.animation[1].height" :width="card.animation[1].width" />
    <BakeIcon class="bake-icon" />
  </div>
</template>

<style scoped>
.map-item-card {
  position: relative;
  padding: 297px 309px 231px 581px;
}

.comet-icon {
  position: absolute;
  top: 8px;
  left: 14px;
  display: block;
}

.bake-icon {
  position: absolute;
  top: 538px;
  left: 684px;
  display: block;
}

.towel-icon {
  position: absolute;
  top: 568px;
  left: 205px;
  display: block;
}

.animation-glasses-from-silpo-110 {
  position: absolute;
  top: 265px;
  left: 251px;
}

.animation-glasses-from-silpo-250 {
  position: absolute;
  top: 360px;
  left: 425px;
}

.animation-glasses-from-silpo-350 {
  position: absolute;
  top: 280px;
  left: 286px;
}

.card-title-wrap {
  position: relative;
  width: 550px;
  height: 293px;
  background-image: url('icons/glassesFromSilpo/title-bg.svg');
  background-repeat: no-repeat;
  background-size: 550px 293px;
  background-position: 0 0;
}

.card-title {
  position: absolute;
  top: 42px;
  left: 103px;
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
  top: 20px;
  width: 100%;
  height: 250px;
  padding: 0;
  border: none;
  background-color: transparent;
}

.icon-btn-wrap {
  position: absolute;
  top: -161px;
  left: -95px;
  pointer-events: none;
}

.leaf-icon {
  position: absolute;
  top: 19px;
  left: 136px;
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
  top: 75px;
  left: 156px;
  display: block;
}

.nav-arrow-icon {
  position: absolute;
  top: 115px;
  left: 103px;
  display: block;
  transform-origin: center top;
}

.card-number {
  position: absolute;
  top: 102px;
  left: 124px;
  color: var(--white-color);
  font-family: Shnobel;
  font-size: 60px;
  font-weight: 400;
  line-height: 1.3;
  transition: opacity var(--transition-duration-and-func);
}

.card-btn:is(:hover, :focus) {
  cursor:
    url('icons/cursor-pointer.svg') 25 0,
    auto;
}

.card-btn:not(:is(:hover, :focus)) ~ .icon-btn-wrap > .nav-arrow-icon {
  transform: rotate(90deg);
  opacity: 0;
}

.card-btn:is(:hover, :focus) ~ .icon-btn-wrap > .leaf-icon {
  transform: translateY(-3px);
}

.card-btn:is(:hover, :focus) ~ .icon-btn-wrap > .main-grape-icon {
  transform: rotate(7.72deg);
}

.card-btn:is(:hover, :focus) ~ .icon-btn-wrap > .grape-icon {
  transform: rotate(10.66deg);
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
