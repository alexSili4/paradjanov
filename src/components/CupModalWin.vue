<script setup>
defineProps({
  isShow: { type: Boolean, required: true },
});
</script>

<template>
  <Teleport to="body">
    <Transition name="container">
      <div class="cup-modal-win" v-show="isShow"></div>
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

.cup-modal-win {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #6572b5;
  background-image: url('icons/cupModalWin/lower-star-mobile.svg'), url('icons/cupModalWin/top-star-mobile.svg'), url('icons/cupModalWin/bubbles-mobile.svg');
  background-position:
    bottom 228px left calc(50% - 138px),
    top 65px right calc(50% - 54px),
    top 74px left calc(50% - 18px);
  background-size:
    47px 48px,
    38px 39px,
    309px 306px;
  background-repeat: no-repeat;
}

@media screen and (min-width: 1280px) {
  .cup-modal-win {
    background-image: url('icons/cupModalWin/lower-star-desk.svg'), url('icons/cupModalWin/top-star-desk.svg'), url('icons/cupModalWin/lower-bubbles-desk.svg'),
      url('icons/cupModalWin/top-bubbles-desk.svg');
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
