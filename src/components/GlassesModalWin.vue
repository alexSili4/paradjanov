<script setup>
import glassesVideo from 'video/glasses.mp4';

defineProps({
  isShow: { type: Boolean, required: true },
  isDesk: { type: Boolean, required: true },
});
</script>

<template>
  <Teleport to="body">
    <Transition name="container">
      <div class="glass-modal-win" v-show="isShow">
        <div class="video-container">
          <video class="video" autoplay muted loop playsinline :src="glassesVideo"></video>
          <div class="video-decorative-elem"></div>
        </div>
        <div class="container">
          <div class="content-wrap">
            <p class="title">Натхнені стакани*</p>
            <p class="description">
              «Натхнені Параджановим» - просвітницький проєкт «Сільпо», створений до 100-річчя видатного режисера Сергія Параджанова. Надихайтеся творчістю митця разом з нами та смакуйте каву в
              натхнених стаканах у «Сільпо».
            </p>
            <p class="description last">
              *Створюючи дизайн стаканів, ілюстратори надихнулися та переосмислили кадри з кінофільмів «Тіні забутих предків» (кіностудія ім. О. Довженка, 1964 рік), «Колір граната» («Вірменфільм»,
              1988 рік), ілюстраціями Кори Церетелі та фотографіями Параджанова за авторством різних фотографів, у тому числі Юрія Мечітова.
            </p>
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
  margin-top: 40px;
  color: var(--white-color);
  font-family: Geologica;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.4;
}

.description.last {
  margin-top: 16px;
  font-size: 14px;
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
}

@media screen and (max-width: 1279px) {
  .glass-modal-win {
    padding-bottom: 46px;
  }

  .container {
    position: relative;
    margin-top: 48px;
  }
}
</style>
