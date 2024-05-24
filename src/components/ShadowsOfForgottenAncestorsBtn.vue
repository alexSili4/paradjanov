<script setup>
import { cardValidator } from 'validator';
import GrapeIcon from 'icons/shadowsOfForgottenAncestors/grape.svg?component';
import LandIcon from 'icons/shadowsOfForgottenAncestors/land.svg?component';
import LeafIcon from 'icons/shadowsOfForgottenAncestors/leaf.svg?component';
import MainGrapeIcon from 'icons/shadowsOfForgottenAncestors/main-grape.svg?component';
import NavArroWIcon from 'icons/shadowsOfForgottenAncestors/nav-arrow.svg?component';
import parajanovBat from 'animations/parajanovBat.json';
import heroes from 'animations/heroes.json';
import candles from 'animations/candles.json';
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
    <Vue3Lottie :autoPlay="playAnimation" :animationData="parajanovBat" class="animation-parajanov-bat" :height="card.animation[0].height" :width="card.animation[0].width" />
    <Vue3Lottie :autoPlay="playAnimation" :animationData="candles" class="animation-candles" :height="card.animation[2].height" :width="card.animation[2].width" />
    <Vue3Lottie :autoPlay="playAnimation" :animationData="heroes" class="animation-heroes" :height="card.animation[1].height" :width="card.animation[1].width" />
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
  padding: 448px 328px 77px 545px;
}

.land-icon {
  position: absolute;
  top: 234px;
  left: 404px;
  display: block;
}

.animation-parajanov-bat {
  position: absolute;
  top: 75px;
  left: 225px;
}

.animation-heroes {
  position: absolute;
  top: 100px;
  left: 688px;
}

.animation-candles {
  position: absolute;
  top: 8px;
  left: 724px;
}

.card-title-wrap {
  position: relative;
  width: 567px;
  height: 295px;
  background-image: url('icons/shadowsOfForgottenAncestors/title-bg.svg');
  background-repeat: no-repeat;
  background-size: 567px 295px;
  background-position: 0 0;
}

.card-title {
  position: absolute;
  top: 42px;
  left: 71px;
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
  top: -20px;
  left: -160px;
  width: 190px;
  height: 175px;
  padding: 0;
  border: none;
  background-color: transparent;
}

.icon-btn-wrap {
  position: absolute;
  top: -88px;
  left: -189px;
  pointer-events: none;
}

.leaf-icon {
  position: absolute;
  top: 204px;
  left: 108px;
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
  top: 135px;
  left: 10px;
  display: block;
}

.nav-arrow-icon {
  position: absolute;
  top: 117px;
  left: 101px;
  display: block;
  transform-origin: center top;
}
.card-number {
  position: absolute;
  top: 112px;
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
  transform: rotate(-90deg);
  opacity: 0;
}

.card-btn:is(:hover, :focus) ~ .icon-btn-wrap > .leaf-icon {
  transform: translateY(4px);
}

.card-btn:is(:hover, :focus) ~ .icon-btn-wrap > .main-grape-icon {
  transform: rotate(5.25deg);
}

.card-btn:is(:hover, :focus) ~ .icon-btn-wrap > .grape-icon {
  transform: rotate(11.34deg);
}

.card-btn:not(:is(:hover, :focus)) ~ .icon-btn-wrap > .nav-arrow-icon {
  transform: rotate(90deg);
  opacity: 0;
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

/* .card-btn {

} */

/* .card-btn-disabled {
  pointer-events: none;
} */

/* .card-title-wrap {
  position: absolute;
  top: 442px;
  left: 211px;
  width: 550px;
  height: 293px;
  background-image: ;
  background-repeat: no-repeat;
  background-size: 550px 293px;
  background-position: 0 0;
  padding-top: 42px;
  padding-left: 71px;
  text-align: left;
} */

/* .land-icon {

} */

/* .candles-icon {
  position: absolute;
  top: 1px;
  left: 368px;
  display: block;
} */

/* .icon-btn-wrap {
  position: absolute;
  top: 353px;
  left: 1px;
  width: 314px;
  height: 313px;
  padding-top: 6px;
  padding-left: 13px;
} */

/* .leaf-icon {
  position: absolute;
  top: 213px;
  left: 121px;
  display: block;
} */

/* .btn-icon {
  transition:
    transform var(--transition-duration-and-func),
    opacity var(--transition-duration-and-func);
} */

/* .main-grape-icon {
  position: relative;
  display: block;
} */

/* .grape-icon {
  position: absolute;
  top: 141px;
  left: 23px;
  display: block;
} */

/* .nav-arrow-icon {

} */

/*  */

/*
} */
</style>
