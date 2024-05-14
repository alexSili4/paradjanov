<script setup>
import { cardValidator } from 'validator';
import GrapeIcon from 'icons/tastePreferences/grape.svg?component';
import LeafIcon from 'icons/tastePreferences/leaf.svg?component';
import MainGrapeIcon from 'icons/tastePreferences/main-grape.svg?component';
import NavArroWIcon from 'icons/tastePreferences/nav-arrow.svg?component';
import CornIcon from 'icons/tastePreferences/corn.svg?component';
import HeroIcon from 'icons/tastePreferences/hero.svg?component';
import PotIcon from 'icons/tastePreferences/pot.svg?component';

defineProps({
  card: cardValidator,
  onCardBtnClick: {
    type: Function,
    required: true,
  },  isDraggable: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <button type="button" :class="['card-btn', { 'card-btn-disabled': isDraggable }]" @click="onCardBtnClick" :disabled="isDraggable">
    <CornIcon class="corn-icon" />
    <span class="card-title-wrap">
      <span class="card-title">{{ card.title }}</span>
    </span>
    <span class="icon-btn-wrap">
      <LeafIcon class="leaf-icon btn-icon" />
      <MainGrapeIcon class="main-grape-icon btn-icon" />
      <GrapeIcon class="grape-icon btn-icon" />
      <NavArroWIcon class="nav-arrow-icon btn-icon" />
      <span class="card-number">{{ card.number }}</span>
    </span>
    <HeroIcon class="hero-icon" />
    <PotIcon class="pot-icon" />
  </button>
</template>

<style scoped>
.card-btn {
  position: relative;
  display: block;
  width: 933px;
  height: 511px;
  padding: 0;
  border: none;
  background-color: transparent;
}

.card-btn-disabled {
  pointer-events: none;
}

.card-title-wrap {
  position: absolute;
  top: 128px;
  left: 284px;
  width: 649px;
  height: 290px;
  background-image: url('icons/tastePreferences/title-bg.svg');
  background-repeat: no-repeat;
  background-size: 649px 290px;
  background-position: 0 0;
  padding-top: 42px;
  padding-left: 142px;
  text-align: left;
}

.card-title {
  color: #353b3f;
  font-family: Shnobel;
  font-size: 90px;
  font-weight: 400;
  line-height: 1.2;
  /* letter-spacing: -0.01; */
  text-transform: uppercase;
}

.corn-icon {
  position: absolute;
  top: -280px;
  left: -211px;
  display: block;
}

.hero-icon {
  position: absolute;
  top: -69px;
  left: 198px;
  display: block;
}

.pot-icon {
  position: absolute;
  top: 1px;
  left: 1px;
  display: block;
}

.icon-btn-wrap {
  position: absolute;
  top: 207px;
  left: 744px;
  width: 314px;
  height: 313px;
  padding-top: 71px;
  padding-left: 66px;
}

.leaf-icon {
  position: absolute;
  top: 218px;
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

.card-btn:not(:is(:hover, :focus)) .nav-arrow-icon {
  transform: rotate(-90deg);
  opacity: 0;
}

.card-btn:is(:hover, :focus) .leaf-icon {
  transform: translateY(4px);
}

.card-btn:is(:hover, :focus) .main-grape-icon {
  transform: rotate(9.06deg);
}

.card-btn:is(:hover, :focus) .grape-icon {
  transform: rotate(16.06deg);
}

@media screen and (min-width: 1280px) {
  .card-btn:is(:hover, :focus) .card-number {
    opacity: 0;
  }
}

@media screen and (max-width: 1279px) {
  .nav-arrow-icon {
    display: none;
  }
}
</style>
