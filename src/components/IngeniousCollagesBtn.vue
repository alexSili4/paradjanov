<script setup>
import { cardValidator } from 'validator';
import GrapeIcon from 'icons/ingeniousCollages/grape.svg?component';
import LeafIcon from 'icons/ingeniousCollages/leaf.svg?component';
import MainGrapeIcon from 'icons/ingeniousCollages/main-grape.svg?component';
import NavArroWIcon from 'icons/ingeniousCollages/nav-arrow.svg?component';
import BodyIcon from 'icons/ingeniousCollages/body.svg?component';
import FaceIcon from 'icons/ingeniousCollages/face.svg?component';
import FrameIcon from 'icons/ingeniousCollages/frame.svg?component';
import GrapesIcon from 'icons/ingeniousCollages/grapes.svg?component';
import LeftHandIcon from 'icons/ingeniousCollages/left-hand.svg?component';
import RightHandIcon from 'icons/ingeniousCollages/right-hand.svg?component';
import SmallGrapeIcon from 'icons/ingeniousCollages/small-grape.svg?component';
import TopGrapeIcon from 'icons/ingeniousCollages/top-grape.svg?component';

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
  <button type="button" :class="['card-btn', { 'card-btn-disabled': isDraggable }]" @click="onCardBtnClick">
    <BodyIcon class="body-icon" />
    <FrameIcon class="frame-icon" />
    <TopGrapeIcon class="top-grape-icon" />
    <FaceIcon class="face-icon" />
    <LeftHandIcon class="left-hand-icon" />
    <RightHandIcon class="right-hand-icon" />
    <SmallGrapeIcon class="small-grape-icon" />
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
    <GrapesIcon class="grapes-icon" />
  </button>
</template>

<style scoped>
.card-btn {
  position: relative;
  display: block;
  width: 867px;
  height: 482px;
  padding: 0;
  border: none;
  background-color: transparent;
}

.card-btn-disabled {
  pointer-events: none;
}

.card-title-wrap {
  position: absolute;
  top: 189px;
  left: 193px;
  width: 670px;
  height: 321px;
  background-image: url('icons/ingeniousCollages/title-bg.svg');
  background-repeat: no-repeat;
  background-size: 670px 321px;
  background-position: 0 0;
  padding-top: 55px;
  padding-left: 286px;
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

.body-icon {
  position: absolute;
  top: 132px;
  left: 1px;
  display: block;
}

.face-icon {
  position: absolute;
  top: 1px;
  left: 156px;
  display: block;
}

.frame-icon {
  position: absolute;
  top: 10px;
  left: -69px;
  display: block;
}

.grapes-icon {
  position: absolute;
  top: 448px;
  left: 323px;
  display: block;
}

.left-hand-icon {
  position: absolute;
  top: 259px;
  left: 0px;
  display: block;
}

.right-hand-icon {
  position: absolute;
  top: 337px;
  left: 388px;
  display: block;
}

.small-grape-icon {
  position: absolute;
  top: 445px;
  left: -101px;
  display: block;
}

.top-grape-icon {
  position: absolute;
  top: 19px;
  left: 288px;
  display: block;
}

.icon-btn-wrap {
  position: absolute;
  top: 62px;
  left: 729px;
  width: 314px;
  height: 313px;
  padding-top: 71px;
  padding-left: 66px;
}

.leaf-icon {
  position: absolute;
  top: 183px;
  left: 30px;
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

.card-btn:not(:is(:hover, :focus)) .nav-arrow-icon {
  transform: rotate(-90deg);
  opacity: 0;
}

.card-btn:is(:hover, :focus) .leaf-icon {
  transform: translateY(5px);
}

.card-btn:is(:hover, :focus) .main-grape-icon {
  transform: rotate(7.57deg);
}

.card-btn:is(:hover, :focus) .grape-icon {
  transform: rotate(10.25deg);
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
