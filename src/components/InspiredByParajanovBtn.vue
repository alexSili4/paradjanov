<script setup>
import { cardValidator } from 'validator';
import CentaurIcon from 'icons/inspiredByParajanov/centaur.svg?component';
import ParadjanovIcon from 'icons/inspiredByParajanov/paradjanov.svg?component';
import LeftEyeIcon from 'icons/inspiredByParajanov/left-eye.svg?component';
import RightEyeIcon from 'icons/inspiredByParajanov/right-eye.svg?component';
import GrapeIcon from 'icons/inspiredByParajanov/grape.svg?component';
import HeadsIcon from 'icons/inspiredByParajanov/heads.svg?component';
import LandIcon from 'icons/inspiredByParajanov/land.svg?component';
import LeafIcon from 'icons/inspiredByParajanov/leaf.svg?component';
import MainGrapeIcon from 'icons/inspiredByParajanov/main-grape.svg?component';
import SilpoIcon from 'icons/inspiredByParajanov/silpo.svg?component';
import SunIcon from 'icons/inspiredByParajanov/sun.svg?component';
import NavArroWIcon from 'icons/inspiredByParajanov/nav-arrow.svg?component';

defineProps({
  card: cardValidator,
});
</script>

<template>
  <button type="button" class="card-btn">
    <SunIcon class="sun-icon" />
    <LandIcon class="land-icon" />
    <CentaurIcon class="centaur-icon" />
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
    <HeadsIcon class="heads-icon" />
    <ParadjanovIcon class="paradjanov-icon-qwerty" />
    <SilpoIcon class="silpo-icon" />
    <LeftEyeIcon class="left-eye-icon" />
    <RightEyeIcon class="right-eye-icon" />
  </button>
</template>

<style scoped>
.card-btn {
  position: relative;
  display: block;
  width: 1135px;
  height: 673px;
  padding: 0;
  border: none;
  background-color: transparent;
}

.card-title-wrap {
  position: absolute;
  top: 389px;
  left: 114px;
  width: 736px;
  height: 284px;
  background-image: url('icons/inspiredByParajanov/title-bg.svg');
  background-repeat: no-repeat;
  background-size: 736px 284px;
  background-position: 0 0;
  padding-top: 38px;
  padding-left: 174px;
  text-align: left;
}

.card-title {
  color: rgb(53, 59, 63);
  font-family: Shnobel;
  font-size: 90px;
  font-weight: 400;
  line-height: 1.2;
  text-transform: uppercase;
}

.land-icon {
  position: absolute;
  top: 156px;
  left: 107px;
  display: block;
}

.centaur-icon {
  position: absolute;
  top: 217px;
  left: 861px;
  display: block;
}

.heads-icon {
  position: absolute;
  top: -83px;
  left: -26px;
  display: block;
}

.paradjanov-icon-qwerty {
  position: absolute;
  top: 0px;
  left: 173px;
  display: block;
}

.silpo-icon {
  position: absolute;
  top: 106px;
  left: 183px;
  display: block;
}

.sun-icon {
  position: absolute;
  top: 208px;
  left: 625px;
  display: block;
}

.left-eye-icon {
  position: absolute;
  top: 172px;
  left: 331px;
  display: block;
}

.right-eye-icon {
  position: absolute;
  top: 163px;
  left: 405px;
  display: block;
}

.icon-btn-wrap {
  position: absolute;
  top: 397px;
  left: -58px;
  width: 314px;
  height: 313px;
  padding-top: 63px;
  padding-left: 59px;
}

.leaf-icon {
  position: absolute;
  top: 78px;
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

.card-btn:not(:is(:hover, :focus)) .nav-arrow-icon {
  transform: rotate(90deg);
  opacity: 0;
}

.card-btn:is(:hover, :focus) .leaf-icon {
  transform: translateY(4px);
}

.card-btn:is(:hover, :focus) .main-grape-icon {
  transform: rotate(9.92deg);
}

.card-btn:is(:hover, :focus) .grape-icon {
  transform: rotate(12.31deg);
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
