import CloseBtnIcon from 'icons/close-btn.svg?component';
<script setup>
import CloseBtnIcon from 'icons/close-btn.svg?component';
import { onUpdated, ref } from 'vue';
import { register } from 'swiper/element/bundle';

register();

const imgSlider = ref(null);

const props = defineProps({
  show: { type: Boolean, required: true },
  onCloseBtnClick: { type: Function, required: true },
  slides: { type: Array, required: true },
  targetIndex: { type: Number, required: true },
});

onUpdated(() => {
  if (~!!props.targetIndex) {
    imgSlider.value.swiper.slideTo(props.targetIndex, 0);
  }
});
</script>

<template>
  <Teleport to="body">
    <Transition name="carousel">
      <div class="carousel-container" v-show="show">
        <button type="button" class="close-btn" @click="onCloseBtnClick">
          <CloseBtnIcon class="close-btn-icon" />
        </button>
        <swiper-container ref="imgSlider" style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="mySwiper" thumbs-swiper=".mySwiper2" space-between="10" navigation="true">
          <swiper-slide :key="index" v-for="({ src, title, year }, index) in slides">
            <div class="card-wrap">
              <img :src="src" class="gallery-img" />
              <div class="text-wrap">
                <p class="title">{{ title }}</p>
                <p class="year">{{ year }}</p>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
        <swiper-container class="mySwiper2" space-between="10" slides-per-view="4" free-mode="true" watch-slides-progress="true">
          <swiper-slide :key="index" v-for="({ src }, index) in slides">
            <img :src="src" />
          </swiper-slide>
        </swiper-container></div
    ></Transition>
  </Teleport>
</template>

<style scoped>
.carousel-enter-active,
.carousel-leave-active {
  transition: opacity var(--transition-duration-and-func);
}

.carousel-enter-from,
.carousel-leave-to {
  opacity: 0;
}

.carousel-container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000000;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: rgba(18, 20, 23, 0.9);
}

.close-btn {
  position: absolute;
  z-index: 10;
  top: 24px;
  right: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background-color: #939ccb;
  transition: background-color var(--transition-duration-and-func);
}

.close-btn:is(:hover, :focus) {
  background-color: #3d3f7f;
}

/*  */

/*  */

.text-wrap {
  display: flex;
  gap: 20px;
  justify-content: space-between;
  margin-top: 20px;
}

.title {
  max-width: 335px;
  color: var(--white-color);
  font-family: Geologica;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.4;
  text-align: left;
}

.year {
  color: var(--white-color);
  font-family: Geologica;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.4;
}

@media screen and (min-width: 1280px) {
  .carousel-container {
    padding: 100px;
  }
}
</style>
