<script setup>
import ArrowIcon from 'icons/arrow.svg?component';
import { glassesValidator } from 'validator';
import { register } from 'swiper/element/bundle';
import { ref } from 'vue';
import GrapeIconMobile from '../icons/glassesModalWin/grape-mobile.svg?component';
import GrapeWithLeafIconMobile from '../icons/glassesModalWin/grape-with-leaf-mobile.svg?component';
import TowelIconMobile from '../icons/glassesModalWin/towel-mobile.svg?component';

register();

const glassesVolumesSlider = ref(null);
const descSlider = ref(null);
const imgSlider = ref(null);

defineProps({
  isShow: { type: Boolean, required: true },
  glasses: glassesValidator,
});

const onNextBtnClick = () => {
  glassesVolumesSlider.value.swiper.slideNext();
  descSlider.value.swiper.slideNext();
  imgSlider.value.swiper.slideNext();
};

const onPrevBtnClick = () => {
  glassesVolumesSlider.value.swiper.slidePrev();
  descSlider.value.swiper.slidePrev();
  imgSlider.value.swiper.slidePrev();
};
</script>

<template>
  <Teleport to="body">
    <Transition name="container">
      <div class="glass-modal-win" v-show="isShow">
        <div class="container">
          <div class="img-slider-wrap">
            <TowelIconMobile class="towel-icon" />
            <GrapeWithLeafIconMobile class="grape-with-leaf-icon" />
            <GrapeIconMobile class="grape-icon" />
            <swiper-container class="img-slider" ref="imgSlider" :slides-per-view="1" :space-between="10" :allowTouchMove="false">
              <swiper-slide :key="img" v-for="{ img, volume } in glasses">
                <img :src="img" :alt="`${volume} мл`" />
              </swiper-slide>
            </swiper-container>
          </div>
          <div class="content-wrap">
            <div class="volume-of-glasses-wrap">
              <swiper-container ref="glassesVolumesSlider" :slides-per-view="1" :space-between="10" :allowTouchMove="false">
                <swiper-slide class="volume-of-glasses-text" :key="volume" v-for="{ volume } in glasses">Натхнені стакани {{ volume }} мл</swiper-slide>
              </swiper-container>
              <ul class="controls-list">
                <li class="controls-list-item">
                  <button ref="prev" type="button" class="nav-btn" @click="onPrevBtnClick">
                    <!-- <ArrowIcon class="nav-btn-icon prev-btn-icon" /> -->
                  </button>
                </li>
                <li class="controls-list-item">
                  <button ref="next" type="button" class="nav-btn" @click="onNextBtnClick">
                    <!-- <ArrowIcon class="nav-btn-icon" /> -->
                  </button>
                </li>
              </ul>
            </div>
            <div class="text-wrap">
              <p class="title">Натхнені стакани</p>
              <!-- <swiper-container ref="descSlider" :slides-per-view="1" :space-between="10">
                <swiper-slide :key="desc" v-for="{ desc } in glasses">
                  <p class="description">{{ desc }}</p></swiper-slide
                >
              </swiper-container> -->
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.container-enter-active,
.container-leave-active {
  transform-origin: top right;
  transition: transform var(--transition-duration-and-func);
}

.container-enter-from,
.container-leave-to {
  transform: scale(0);
}

.glass-modal-win {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-top: 109px;
  padding-bottom: 46px;
  background-color: #6572b5;
  background-image: url('icons/glassessModalWin/lower-star-mobile.svg'), url('icons/glassessModalWin/top-star-mobile.svg'), url('icons/glassessModalWin/bubbles-mobile.svg');
  background-position:
    bottom 228px left calc(50% - 138px),
    top 65px right calc(50% - 54px),
    top 74px left calc(50% - 18px);
  background-size:
    47px 48px,
    38px 39px,
    309px 306px;
  background-repeat: no-repeat;
  overflow-y: scroll;
}

.container {
  width: 343px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
}

.img-slider-wrap {
  position: relative;
  width: 264px;
  height: 358px;
  margin-left: calc(50% - 5px - 264px / 2);
}

.img-slider {
}

.grape-icon {
  position: absolute;
  top: 298px;
  left: 224px;
  display: block;
}

.grape-with-leaf-icon {
  position: absolute;
  top: 267px;
  left: 242px;
  display: block;
}

.towel-icon {
  position: absolute;
  top: 250px;
  left: -39px;
  display: block;
}

.content-wrap {
}

.volume-of-glasses-wrap {
  position: relative;
  width: 161px;
  margin-left: auto;
  margin-right: auto;
}

.volume-of-glasses-text {
  color: var(--white-color);
  font-family: Geologica;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.4;
  text-align: center;
}

.controls-list {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 343px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform: translateX(-50%) translateY(-50%);
}

.controls-list-item {
}

.nav-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border: none;
  border-radius: 50%;
  background-color: #3d3f7f;
}

.nav-btn-icon {
}

.prev-btn-icon {
}

.nav-btn-icon.prev-btn-icon {
  transform: rotate(180deg);
}

.text-wrap {
}

.title {
  color: var(--white-color);
  font-family: Shnobel;
  font-size: 40px;
  font-weight: 400;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
}

.description {
  margin-top: 24px;
  color: var(--white-color);
  font-family: Geologica;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.4;
}

@media screen and (max-width: 1279px) {
  .content-wrap {
    margin-top: 52px;
  }

  .text-wrap {
    margin-top: 67px;
  }
}

@media screen and (min-width: 1280px) {
  .glass-modal-win {
    background-image: url('icons/glassessModalWin/lower-star-desk.svg'), url('icons/glassessModalWin/top-star-desk.svg'), url('icons/glassessModalWin/lower-bubbles-desk.svg'),
      url('icons/glassessModalWin/top-bubbles-desk.svg');
    background-position:
      bottom 63px right 49px,
      top 112px left 380px,
      bottom -236px left 198px,
      top -254px left 817px;
    background-size:
      65px 67px,
      47px 48px,
      492px 469px,
      416px 486px;
    background-repeat: no-repeat;
  }
}
</style>
