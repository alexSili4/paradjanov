<script setup>
import { cardValidator } from 'validator';
import CandlesIcon from 'icons/shadowsOfForgottenAncestors/candles.svg?component';
import GrapeIcon from 'icons/shadowsOfForgottenAncestors/grape.svg?component';
import HeroesIcon from 'icons/shadowsOfForgottenAncestors/heroes.svg?component';
import LandIcon from 'icons/shadowsOfForgottenAncestors/land.svg?component';
import LeafIcon from 'icons/shadowsOfForgottenAncestors/leaf.svg?component';
import MainGrapeIcon from 'icons/shadowsOfForgottenAncestors/main-grape.svg?component';
import ParajanovBatIcon from 'icons/shadowsOfForgottenAncestors/parajanov-bat.svg?component';
import NavArroWIcon from 'icons/shadowsOfForgottenAncestors/nav-arrow.svg?component';

defineProps({
  card: cardValidator,
});
</script>

<template>
  <button type="button" class="card-btn">
    <LandIcon class="land-icon" />
    <CandlesIcon class="candles-icon" />
    <HeroesIcon class="heroes-icon" />
    <span class="card-title-wrap">
      <span class="card-title">{{ card.title }}</span>
    </span>
    <ParajanovBatIcon class="parajanov-bat-icon" />
    <span class="icon-btn-wrap">
      <LeafIcon class="leaf-icon btn-icon" />
      <MainGrapeIcon class="main-grape-icon btn-icon" />
      <GrapeIcon class="grape-icon btn-icon" />
      <NavArroWIcon class="nav-arrow-icon btn-icon" />
      <span class="card-number">{{ card.number }}</span>
    </span>
  </button>
</template>

<style scoped>
.card-btn {
  position: relative;
  display: block;
  width: 836px;
  height: 735px;
  padding: 0;
  border: none;
  background-color: transparent;
}

.card-title-wrap {
  position: absolute;
  top: 442px;
  left: 211px;
  width: 550px;
  height: 293px;
  background-image: url('icons/shadowsOfForgottenAncestors/title-bg.svg');
  background-repeat: no-repeat;
  background-size: 550px 293px;
  background-position: 0 0;
  padding-top: 42px;
  padding-left: 71px;
  text-align: left;
}

.card-title {
  color: #353b3f;
  font-family: Shnobel;
  font-size: 90px;
  font-weight: 400;
  line-height: 1.2;
  text-transform: uppercase;
}

.land-icon {
  position: absolute;
  top: 150px;
  left: 17px;
  display: block;
}

.candles-icon {
  position: absolute;
  top: 1px;
  left: 368px;
  display: block;
}

.heroes-icon {
  position: absolute;
  top: 60px;
  left: 289px;
  display: block;
}

.parajanov-bat-icon {
  position: absolute;
  top: 80px;
  left: -97px;
  display: block;
}

.icon-btn-wrap {
  position: absolute;
  top: 353px;
  left: 1px;
  width: 314px;
  height: 313px;
  padding-top: 6px;
  padding-left: 13px;
}

.leaf-icon {
  position: absolute;
  top: 213px;
  left: 121px;
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
  top: 141px;
  left: 23px;
  display: block;
}

.nav-arrow-icon {
  position: absolute;
  top: 128px;
  left: 118px;
  display: block;
  transform-origin: center top;
}

.card-number {
  position: absolute;
  top: 117px;
  left: 136px;
  color: var(--white-color);
  font-family: Shnobel;
  font-size: 60px;
  font-weight: 400;
  line-height: 1.3;
  transition: opacity var(--transition-duration-and-func);
}

.card-btn:not(:is(:hover, :focus)) .nav-arrow-icon {
  transform: rotate(90deg);
  opacity: 0;
}

.card-btn:is(:hover, :focus) .leaf-icon {
  transform: translateY(4px);
}

.card-btn:is(:hover, :focus) .main-grape-icon {
  transform: rotate(5.25deg);
}

.card-btn:is(:hover, :focus) .grape-icon {
  transform: rotate(11.34deg);
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
