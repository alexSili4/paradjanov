<script setup>
import { cardValidator } from 'validator';
import GrapeIcon from 'icons/garnetColor/grape.svg?component';
import LeafIcon from 'icons/garnetColor/leaf.svg?component';
import MainGrapeIcon from 'icons/garnetColor/main-grape.svg?component';
import NavArroWIcon from 'icons/garnetColor/nav-arrow.svg?component';
import CometIcon from 'icons/garnetColor/comet.svg?component';
import GrapesIcon from 'icons/garnetColor/grapes.svg?component';
import LandIcon from 'icons/garnetColor/land.svg?component';
import LeftChickenIcon from 'icons/garnetColor/left-chicken.svg?component';
import RightChickenIcon from 'icons/garnetColor/right-chicken.svg?component';
import SmallGrapeIcon from 'icons/garnetColor/small-grape.svg?component';
import garnetColor from 'animations/garnetColor.json';
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
    <LandIcon class="land-icon" />
    <CometIcon class="comet-icon" />
    <SmallGrapeIcon class="small-grape-icon" />
    <LeftChickenIcon class="left-chicken-icon" />
    <RightChickenIcon class="right-chicken-icon" />
    <Vue3Lottie :autoPlay="playAnimation" :animationData="garnetColor" class="animation-item" :height="card.animation[0].height" :width="card.animation[0].width" />
    <div class="card-title-wrap">
      <p class="card-title">{{ card.title }}</p>
      <button type="button" class="card-btn card-article-btn" @click="onCardBtnClick" :disabled="isDraggable"></button>
      <span class="icon-btn-wrap">
        <MainGrapeIcon class="main-grape-icon btn-icon" />
        <LeafIcon class="leaf-icon btn-icon" />
        <GrapeIcon class="grape-icon btn-icon" />
        <NavArroWIcon class="nav-arrow-icon btn-icon" />
        <span class="card-number">{{ card.number }}</span>
      </span>
    </div>
    <GrapesIcon class="grapes-icon" />
  </div>
</template>

<style scoped>
.map-item-card {
  position: relative;
  padding: 469px 600px 106px 695px;
}

.land-icon {
  position: absolute;
  top: 174px;
  left: 560px;
  display: block;
}

.comet-icon {
  position: absolute;
  top: -63px;
  left: 1195px;
  display: block;
}

.small-grape-icon {
  position: absolute;
  top: 730px;
  left: 1121px;
  display: block;
}

.left-chicken-icon {
  position: absolute;
  top: 498px;
  left: 589px;
  display: block;
}

.right-chicken-icon {
  position: absolute;
  top: 408px;
  left: 1278px;
  display: block;
}

.animation-item {
  position: absolute;
  top: 121px;
  left: 637px;
}

.card-title-wrap {
  position: relative;
  width: 674px;
  height: 245px;
  background-image: url('icons/garnetColor/title-bg.svg');
  background-repeat: no-repeat;
  background-size: 674px 245px;
  background-position: 0 0;
}

.card-title {
  position: absolute;
  top: 78px;
  left: 129px;
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
  top: 115px;
  left: -115px;
  width: 210px;
  height: 160px;
  padding: 0;
  border: none;
  background-color: transparent;
}

.icon-btn-wrap {
  position: absolute;
  top: 35px;
  left: -145px;
  pointer-events: none;
}

.leaf-icon {
  position: absolute;
  top: 48px;
  left: 66px;
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
  top: 69px;
  left: 10px;
  display: block;
}

.nav-arrow-icon {
  position: absolute;
  top: 139px;
  left: 127px;
  display: block;
  transform-origin: center top;
}

.card-number {
  position: absolute;
  top: 133px;
  left: 150px;
  color: var(--white-color);
  font-family: Shnobel;
  font-size: 60px;
  font-weight: 400;
  line-height: 1.3;
  transition: opacity var(--transition-duration-and-func);
}

.grapes-icon {
  position: absolute;
  top: 680px;
  left: 1206px;
  display: block;
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
  transform: translateY(-4px);
}

.card-btn:is(:hover, :focus) ~ .icon-btn-wrap > .main-grape-icon {
  transform: rotate(7.32deg);
}

.card-btn:is(:hover, :focus) ~ .icon-btn-wrap > .grape-icon {
  transform: rotate(13.41deg);
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
