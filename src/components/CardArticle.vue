<script setup>
import CloseBtnIcon from 'icons/article/close-btn.svg';

defineProps({
  onCloseBtnClick: { type: Function, required: true },
  isShow: { type: Boolean, required: true },
});
</script>

<template>
  <Teleport to="body">
    <Transition name="container">
      <div class="article-wrap" v-show="isShow">
        <div class="article-decorative-element"></div>
        <div class="article-container">
          <button type="button" class="close-btn" @click="onCloseBtnClick">
            <CloseBtnIcon class="close-btn-icon" />
          </button>
          <slot></slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.container-enter-active,
.container-leave-active {
  transition: transform var(--transition-duration-and-func);
}

.article-wrap {
  position: fixed;
  z-index: 100;
  top: 100px;
  right: 0;
  width: 100%;
  height: calc(100% - 100px);
  background-color: var(--white-color);
}

.article-decorative-element {
  position: absolute;
  top: -22px;
  left: 0;
  width: 100%;
  height: 22px;
  background-image: url('../icons/cardArticle/article-bg-mobile.svg');
}

.article-container {
  height: 100%;
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

  .article-wrap {
    position: fixed;
    z-index: 100;
    top: 0;
    right: 0;
    width: 726px;
    height: 100%;
    background-color: var(--white-color);
  }

  .article-container {
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
