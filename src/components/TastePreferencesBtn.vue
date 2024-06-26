<script setup>
import { cardValidator } from 'validator';
import GrapeIcon from 'icons/tastePreferences/grape.svg?component';
import LeafIcon from 'icons/tastePreferences/leaf.svg?component';
import MainGrapeIcon from 'icons/tastePreferences/main-grape.svg?component';
import NavArroWIcon from 'icons/tastePreferences/nav-arrow.svg?component';
import HeroIcon from 'icons/tastePreferences/hero.svg?component';
import corn from 'animations/corn.json';
import pot from 'animations/pot.json';
import { Vue3Lottie } from 'vue3-lottie';
import tap from 'animations/hand.json';

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
      <button type="button" class="card-btn card-article-btn" @click="onCardBtnClick"></button>
      <Vue3Lottie :autoPlay="playAnimation" :animationData="tap" class="tap-animation" />
      <span class="icon-btn-wrap">
        <LeafIcon class="leaf-icon btn-icon" />
        <MainGrapeIcon class="main-grape-icon btn-icon" />
        <GrapeIcon class="grape-icon btn-icon" />
        <NavArroWIcon class="nav-arrow-icon btn-icon" />
        <span class="card-number">{{ card.number }}</span>
      </span>
    </div>
    <Vue3Lottie :autoPlay="playAnimation" :animationData="corn" class="animation-corn" :height="card.animation[0].height" :width="card.animation[0].width" />
    <HeroIcon class="hero-icon" />
    <Vue3Lottie :autoPlay="playAnimation" :animationData="pot" class="animation-pot" :height="card.animation[1].height" :width="card.animation[1].width" />
  </div>
</template>

<style scoped>
.map-item-card {
  position: relative;
  padding: 327px 400px 203px 514px;
}

.hero-icon {
  position: absolute;
  top: 130px;
  left: 429px;
  display: block;
}

.animation-corn {
  position: absolute;
  top: -12px;
  left: 34px;
}

.animation-pot {
  position: absolute;
  top: 200px;
  left: 232px;
}

.card-title-wrap {
  position: relative;
  width: 649px;
  height: 290px;
  background-image: url('icons/tastePreferences/title-bg.svg');
  background-repeat: no-repeat;
  background-size: 649px 290px;
  background-position: 0 0;
}

.card-title {
  position: absolute;
  top: 43px;
  left: 162px;
  color: #353b3f;
  font-family: Shnobel;
  font-size: 90px;
  font-weight: 400;
  line-height: 1.2;
  text-transform: uppercase;
}

.card-btn {
  position: absolute;
  z-index: 20;
  top: 155px;
  left: 480px;
  width: 215px;
  height: 200px;
  padding: 0;
  border: none;
  background-color: transparent;
}

.icon-btn-wrap {
  position: absolute;
  top: 80px;
  left: 461px;
}

.leaf-icon {
  position: absolute;
  top: 217px;
  left: 90px;
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
  top: 183px;
  left: 18px;
  display: block;
}

.nav-arrow-icon {
  position: absolute;
  top: 132px;
  left: 120px;
  display: block;
  transform-origin: center top;
}

.card-number {
  position: absolute;
  top: 126px;
  left: 139px;
  color: var(--white-color);
  font-family: Shnobel;
  font-size: 60px;
  font-weight: 400;
  line-height: 1.3;
  transition: opacity var(--transition-duration-and-func);
}

.card-btn:is(:hover, :focus) {
  cursor:
    url('icons/cursor-pointer.svg') 23.8 0,
    auto;
}

.card-btn:not(:is(:hover, :focus)) ~ .icon-btn-wrap > .nav-arrow-icon {
  transform: rotate(-90deg);
  opacity: 0;
}

.card-btn:is(:hover, :focus) ~ .icon-btn-wrap > .leaf-icon {
  transform: translateY(4px);
}

.card-btn:is(:hover, :focus) ~ .icon-btn-wrap > .main-grape-icon {
  transform: rotate(9.06deg);
}

.card-btn:is(:hover, :focus) ~ .icon-btn-wrap > .grape-icon {
  transform: rotate(16.06deg);
}

.tap-animation {
  position: absolute;
  z-index: 10;
  top: 80px;
  left: 505px;
  width: calc(118.12px / 0.4277);
  height: calc(200px / 0.4277);
}

@media screen and (min-width: 1280px) {
  .card-btn:is(:hover, :focus) ~ .icon-btn-wrap > .card-number {
    opacity: 0;
  }

  .tap-animation {
    display: none;
  }

  .card-btn {
    top: 0px;
    left: 80px;
    width: 615px;
    height: 290px;
  }
}

@media screen and (max-width: 1279px) {
  .nav-arrow-icon {
    display: none;
  }
}
</style>
