<script setup>
import { cardValidator } from 'validator';
import GrapeIcon from 'icons/garnetColor/grape.svg?component';
import LeafIcon from 'icons/garnetColor/leaf.svg?component';
import MainGrapeIcon from 'icons/garnetColor/main-grape.svg?component';
import NavArroWIcon from 'icons/garnetColor/nav-arrow.svg?component';
import CometIcon from 'icons/garnetColor/comet.svg?component';
import GrapesIcon from 'icons/garnetColor/grapes.svg?component';
import LaceIcon from 'icons/garnetColor/lace.svg?component';
import LandIcon from 'icons/garnetColor/land.svg?component';
import LeftChickenIcon from 'icons/garnetColor/left-chicken.svg?component';
import LeftHandIcon from 'icons/garnetColor/left-hand.svg?component';
import ParadjanovIcon from 'icons/garnetColor/paradjanov.svg?component';
import RightChickenIcon from 'icons/garnetColor/right-chicken.svg?component';
import RightHandIcon from 'icons/garnetColor/right-hand.svg?component';
import SmallGrapeIcon from 'icons/garnetColor/small-grape.svg?component';

defineProps({
  card: cardValidator,
});
</script>

<template>
  <button type="button" class="card-btn">
    <CometIcon class="comet-icon" />
    <LandIcon class="land-icon" />
    <LeftChickenIcon class="left-chicken-icon" />
    <RightChickenIcon class="right-chicken-icon" />
    <ParadjanovIcon class="paradjanov-icon" />
    <LaceIcon class="lace-icon" />
    <LeftHandIcon class="left-hand-icon" />
    <RightHandIcon class="right-hand-icon" />
    <SmallGrapeIcon class="small-grape-icon" />
    <span class="card-title-wrap">
      <span class="card-title">{{ card.title }}</span>
    </span>
    <span class="icon-btn-wrap">
      <MainGrapeIcon class="main-grape-icon btn-icon" />
      <NavArroWIcon class="nav-arrow-icon btn-icon" />
      <LeafIcon class="leaf-icon btn-icon" />
      <GrapeIcon class="grape-icon btn-icon" />
      <span class="card-number">{{ card.number }}</span>
    </span>
    <GrapesIcon class="grapes-icon" />
  </button>
</template>

<style scoped>
.card-btn {
  position: relative;
  display: block;
  width: 899px;
  height: 697px;
  padding: 0;
  border: none;
  background-color: transparent;
}

.card-title-wrap {
  position: absolute;
  top: 341px;
  left: 142px;
  width: 678px;
  height: 254px;
  background-image: url('icons/garnetColor/title-bg.svg');
  background-repeat: no-repeat;
  background-size: 678px 254px;
  background-position: 0 0;
  padding-top: 87px;
  padding-left: 133px;
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

.comet-icon {
  position: absolute;
  top: -182px;
  left: 646px;
  display: block;
}

.grapes-icon {
  position: absolute;
  top: 561px;
  left: 656px;
  display: block;
}

.lace-icon {
  position: absolute;
  top: 159px;
  left: 98px;
  display: block;
}

.land-icon {
  position: absolute;
  top: 55px;
  left: 4px;
  display: block;
}

.left-chicken-icon {
  position: absolute;
  top: 379px;
  left: 40px;
  display: block;
}

.left-hand-icon {
  position: absolute;
  top: 196px;
  left: 117px;
  display: block;
}

.paradjanov-icon {
  position: absolute;
  top: 1px;
  left: 85px;
  display: block;
}

.right-chicken-icon {
  position: absolute;
  top: 289px;
  left: 728px;
  display: block;
}

.right-hand-icon {
  position: absolute;
  top: 194px;
  left: 480px;
  display: block;
}

.small-grape-icon {
  position: absolute;
  top: 611px;
  left: 571px;
  display: block;
}

.icon-btn-wrap {
  position: absolute;
  top: 382px;
  left: 5px;
  width: 322px;
  height: 320px;
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
  top: 142px;
  left: 123px;
  display: block;
  transform-origin: center top;
}

.card-number {
  position: absolute;
  top: 136px;
  left: 145px;
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
  transform: translateY(-4px);
}

.card-btn:is(:hover, :focus) .main-grape-icon {
  transform: rotate(7.32deg);
}

.card-btn:is(:hover, :focus) .grape-icon {
  transform: rotate(13.41deg);
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
