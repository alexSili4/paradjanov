<script setup>
import CloseBtnIcon from 'icons/article/close-btn.svg';

defineProps({
  onCloseBtnClick: { type: Function, required: true },
  isShow: { type: Boolean, required: true },
});
</script>

<template>
  <Transition name="container">
    <div class="article-container" v-show="isShow">
      <button type="button" class="close-btn" @click="onCloseBtnClick">
        <CloseBtnIcon class="close-btn-icon" />
      </button>
      <slot></slot></div
  ></Transition>
</template>

<style scoped>
.container-enter-active,
.container-leave-active {
  transition: transform var(--transition-duration-and-func);
}

.article-container {
  position: fixed;
  z-index: 100;
  top: 200px;
  right: 0;
  width: 100%;
  height: calc(100% - 200px);
  background-color: var(--white-color);
  padding: 24px 16px;
  overflow-y: auto;
}

.close-btn {
  position: absolute;
  top: 24px;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background-color: #939ccb;
  transition: background-color var(--transition-duration-and-func);
}

.close-btn:is(:hover, :focus) {
  background-color: #3d3f7f;
}

@media screen and (min-width: 1280px) {
  .container-enter-from,
  .container-leave-to {
    transform: translateX(100%);
  }

  .article-container {
    top: 0;
    right: 0;
    width: 726px;
    height: 100%;
    padding: 92px 48px 56px;
  }

  .close-btn {
    top: 24px;
    right: 48px;
    width: 40px;
    height: 40px;
  }
}

@media screen and (max-width: 1279px) {
  .container-enter-from,
  .container-leave-to {
    transform: translateY(100%);
  }
}
</style>
