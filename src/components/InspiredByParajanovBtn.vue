<script setup>
import { cardValidator } from 'validator';
import GrapeIcon from 'icons/inspiredByParajanov/grape.svg?component';
import HeadsIcon from '../icons/inspiredByParajanov/heads.svg?component';
import LandIcon from 'icons/inspiredByParajanov/land.svg?component';
import LeafIcon from 'icons/inspiredByParajanov/leaf.svg?component';
import MainGrapeIcon from 'icons/inspiredByParajanov/main-grape.svg?component';
import SunIcon from 'icons/inspiredByParajanov/sun.svg?component';
import NavArroWIcon from 'icons/inspiredByParajanov/nav-arrow.svg?component';
import centaur from 'animations/centaur.json';
import logoWithHero from 'animations/logo-with-hero.json';

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
    <SunIcon class="sun-icon" />
    <LandIcon class="land-icon" />
    <HeadsIcon class="heads-icon" />
    <Vue3Lottie :animationData="centaur" class="animation-centaur" :height="card.animation[0].height" :width="card.animation[0].width" />
    <Vue3Lottie :animationData="logoWithHero" class="animation-logo-with-hero" :height="card.animation[1].height" :width="card.animation[1].width" />
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
  </div>
</template>

<style scoped>
.map-item-card {
  position: relative;
  padding: 466px 548px 70px 157px;
}

.sun-icon {
  position: absolute;
  top: 285px;
  left: 668px;
  display: block;
}

.land-icon {
  position: absolute;
  top: 296px;
  left: 150px;
  display: block;
}

.heads-icon {
  position: absolute;
  z-index: 10;
  top: 100px;
  left: 23px;
  display: block;
}

.animation-centaur {
  position: absolute;
  top: 47px;
  left: 431px;
}

.animation-logo-with-hero {
  position: absolute;
  z-index: 10;
  top: 0px;
  left: 186px;
}

.card-title-wrap {
  position: relative;
  width: 735.71px;
  height: 284.22px;
  background-image: url('icons/inspiredByParajanov/title-bg.svg');
  background-repeat: no-repeat;
  background-size: 735.71px 284.22px;
  background-position: 0 0;
}

.card-title {
  position: absolute;
  top: 38px;
  left: 174px;
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
  height: 245px;
  padding: 0;
  border: none;
  background-color: transparent;
}

.icon-btn-wrap {
  position: absolute;
  top: 8px;
  left: -172px;
  padding-left: 15px;
  pointer-events: none;
}

.leaf-icon {
  position: absolute;
  top: 79px;
  left: 219px;
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
  top: 173px;
  left: 178px;
  display: block;
}

.nav-arrow-icon {
  position: absolute;
  top: 133px;
  left: 125px;
  display: block;
  transform-origin: center top;
}

.card-number {
  position: absolute;
  top: 124px;
  left: 150px;
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
  transform: rotate(9.92deg);
}

.card-btn:is(:hover, :focus) ~ .icon-btn-wrap > .grape-icon {
  transform: rotate(12.31deg);
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
