<script setup>
import ArrowIcon from 'icons/arrow.svg?component';
import { glassesValidator } from 'validator';
import { register } from 'swiper/element/bundle';
import { ref } from 'vue';
import glassesVideo from 'video/glasses.mp4';

register();

const glassesVolumesSlider = ref(null);
const descSlider = ref(null);
const imgSlider = ref(null);

defineProps({
  isShow: { type: Boolean, required: true },
  glasses: glassesValidator,
  isDesk: { type: Boolean, required: true },
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
        <div class="video-container">
          <video class="video" autoplay muted loop :src="glassesVideo"></video>
          <div class="video-decorative-elem"></div>
        </div>
        <div class="container">
          <div class="content-wrap">
            <p class="title">Натхнені стакани</p>
            <div class="volume-of-glasses-and-text-wrap">
              <div class="volume-of-glasses-wrap">
                <swiper-container ref="glassesVolumesSlider" :slides-per-view="1" :space-between="10" :allowTouchMove="false">
                  <swiper-slide class="volume-of-glasses-text" :key="volume" v-for="{ volume } in glasses">{{ volume }} мл</swiper-slide>
                </swiper-container>
                <ul class="controls-list">
                  <li class="controls-list-item">
                    <button ref="prev" type="button" class="nav-btn" @click="onPrevBtnClick">
                      <ArrowIcon class="nav-btn-icon prev-btn-icon" />
                    </button>
                  </li>
                  <li class="controls-list-item">
                    <button ref="next" type="button" class="nav-btn" @click="onNextBtnClick">
                      <ArrowIcon class="nav-btn-icon" />
                    </button>
                  </li>
                </ul>
              </div>
              <div class="text-wrap">
                <swiper-container class="desc-slider" ref="descSlider" :slides-per-view="1" :space-between="10">
                  <swiper-slide :key="desc" v-for="{ desc } in glasses">
                    <p class="description">{{ desc }}</p></swiper-slide
                  >
                </swiper-container>
              </div>
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
  z-index: 100000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: #6572b5;
  background-image: url('icons/glassesModalWin/lower-star-mobile.svg'), url('icons/glassesModalWin/top-star-mobile.svg'), url('icons/glassesModalWin/bubbles-mobile.svg');
  background-position:
    bottom 228px left calc(50% - 138px),
    top 65px right calc(50% - 54px),
    top 74px left calc(50% - 18px);
  background-size:
    47px 48px,
    38px 39px,
    309px 306px;
  background-repeat: no-repeat;
  overflow-y: auto;
}

.video-container {
  position: relative;
  width: 100%;
}

.video {
  display: block;
  width: 100%;
}

.video-decorative-elem {
  position: absolute;
  top: calc(100% - 16px);
  left: 0;
  width: 100%;
  height: 87px;
  background-image: url('icons/glassesModalWin//video-decorative-elem-mobile.svg');
}

.container {
  width: 343px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
}

.content-wrap {
  position: relative;
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

.volume-of-glasses-and-text-wrap {
  margin-top: 40px;
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

.nav-btn-icon.prev-btn-icon {
  transform: rotate(180deg);
}

.description {
  color: var(--white-color);
  font-family: Geologica;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.4;
}

@media screen and (min-width: 1280px) {
  .glass-modal-win {
    display: flex;
    flex-direction: row-reverse;
    background-image: url('icons/glassesModalWin/lower-star-desk.svg'), url('icons/glassesModalWin/top-star-desk.svg'), url('icons/glassesModalWin/lower-bubbles-desk.svg'),
      url('icons/glassesModalWin/top-bubbles-desk.svg');
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

  .video-container {
    position: relative;
    width: auto;
    height: 100vh;
  }

  .video {
    width: auto;
    height: 100vh;
  }

  .video-decorative-elem {
    position: absolute;
    top: 0;
    left: -114px;
    width: 140px;
    height: 100vh;
    background-image: url('icons/glassesModalWin//video-decorative-elem-desk.svg');
  }

  .container {
    width: 508px;
    margin-left: 46px;
    padding-top: 228px;
  }

  .title {
    width: 100%;
    font-size: 90px;
    letter-spacing: 0%;
    text-wrap: nowrap;
  }

  .volume-of-glasses-and-text-wrap {
    display: flex;
    flex-direction: column-reverse;
    gap: 86px;
  }

  .controls-list {
    width: 507px;
  }
}

@media screen and (max-width: 1279px) {
  .glass-modal-win {
    padding-bottom: 46px;
  }

  .container {
    margin-top: 47px;
  }

  .text-wrap {
    margin-top: 32px;
  }

  .desc-slider {
    margin-top: 24px;
  }
}
</style>
