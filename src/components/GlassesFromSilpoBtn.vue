<script setup>
import { cardValidator } from 'validator';
import GrapeIcon from 'icons/glassesFromSilpo/grape.svg?component';
import LeafIcon from 'icons/glassesFromSilpo/leaf.svg?component';
import MainGrapeIcon from 'icons/glassesFromSilpo/main-grape.svg?component';
import NavArroWIcon from 'icons/glassesFromSilpo/nav-arrow.svg?component';
import BakeIcon from 'icons/glassesFromSilpo/bake.svg?component';
import BigGlassIcon from 'icons/glassesFromSilpo/big-glass.svg?component';
import CometIcon from 'icons/glassesFromSilpo/comet.svg?component';
import MediumGlassIcon from 'icons/glassesFromSilpo/medium-glass.svg?component';
import SmallGlassIcon from 'icons/glassesFromSilpo/small-glass.svg?component';
import TowelIcon from 'icons/glassesFromSilpo/towel.svg?component';

defineProps({
  card: cardValidator,
});
</script>

<template>
  <button type="button" class="card-btn">
    <span class="card-title-wrap">
      <span class="card-title">{{ card.title }}</span>
    </span>
    <TowelIcon class="towel-icon" />
    <BigGlassIcon class="big-glass-icon" />
    <MediumGlassIcon class="medium-glass-icon" />
    <SmallGlassIcon class="small-glass-icon" />
    <CometIcon class="comet-icon" />
    <BakeIcon class="bake-icon" />
    <span class="icon-btn-wrap">
      <LeafIcon class="leaf-icon btn-icon" />
      <GrapeIcon class="grape-icon btn-icon" />
      <MainGrapeIcon class="main-grape-icon btn-icon" />
      <NavArroWIcon class="nav-arrow-icon btn-icon" />
      <span class="card-number">{{ card.number }}</span>
    </span>
  </button>
</template>

<style scoped>
.card-btn {
  position: relative;
  display: block;
  width: 927px;
  height: 682px;
  padding: 0;
  border: none;
  background-color: transparent;
}

.card-title-wrap {
  position: absolute;
  top: 158px;
  left: 377px;
  width: 550px;
  height: 293px;
  background-image: url('icons/glassesFromSilpo/title-bg.svg');
  background-repeat: no-repeat;
  background-size: 550px 293px;
  background-position: 0 0;
  padding-top: 42px;
  padding-left: 103px;
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

.bake-icon {
  position: absolute;
  top: 400px;
  left: 480px;
  display: block;
}

.big-glass-icon {
  position: absolute;
  top: 182px;
  left: 119px;
  display: block;
}

.comet-icon {
  position: absolute;
  top: -131px;
  left: -190px;
  display: block;
}

.medium-glass-icon {
  position: absolute;
  top: 276px;
  left: 254px;
  display: block;
}

.small-glass-icon {
  position: absolute;
  top: 339px;
  left: 70px;
  display: block;
}

.towel-icon {
  position: absolute;
  top: 358px;
  left: 0px;
  display: block;
}

.icon-btn-wrap {
  position: absolute;
  top: -7px;
  left: 260px;
  width: 325px;
  height: 320px;
}

.leaf-icon {
  position: absolute;
  top: 20px;
  left: 137px;
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
  left: 156.2px;
  display: block;
}

.nav-arrow-icon {
  position: absolute;
  top: 116px;
  left: 104px;
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

.card-btn:not(:is(:hover, :focus)) .nav-arrow-icon {
  transform: rotate(90deg);
  opacity: 0;
}

.card-btn:is(:hover, :focus) .leaf-icon {
  transform: translateY(-3px);
}

.card-btn:is(:hover, :focus) .main-grape-icon {
  transform: rotate(7.72deg);
}

.card-btn:is(:hover, :focus) .grape-icon {
  transform: rotate(10.66deg);
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
