<script setup>
import LogoDesk from 'icons/header/logo-desk.svg?component';
import LogoMobile from 'icons/header/logo-mobile.svg?component';
import handWithCup from 'images/header/hand-with-cup.png';
import Warning from 'icons/header/warning.svg?component';

defineProps({
  isDesk: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <header class="header">
    <a href="/" class="logo-link">
      <LogoDesk class="logo-link-icon" v-if="isDesk" />
      <LogoMobile class="logo-link-icon" v-else />
    </a>
    <button type="button" class="hand-btn">
      <img :src="handWithCup" alt="рука з чашкою" class="hand-with-cup-img" />
      <Warning class="warning-icon" v-show="isDesk" />
    </button>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  z-index: 100;
  top: 11px;
  left: 50%;
  width: calc(100% - 16px - 16px);
  display: flex;
  justify-content: space-between;
  transform: translateX(-50%);
}

.logo-link {
  flex-shrink: 0;
  align-self: flex-start;
}

.logo-link-icon {
  display: block;
  width: 112.6px;
  height: 60px;
}

.hand-btn {
  flex-shrink: 0;
  position: relative;
  align-self: flex-start;
  display: block;
  padding: 0;
  border: none;
  background-color: transparent;
  transform-origin: top right;
}

.hand-with-cup-img {
  position: relative;
  z-index: 1;
  width: 67.91px;
  height: 63px;
  transition: transform var(--transition-duration-and-func);
}

.hand-btn:is(:hover, :focus) .hand-with-cup-img {
  transform: rotate(-10.06deg);
}

.hand-btn:is(:hover, :focus) .warning-icon {
  transform: translateY(44px);
  fill: var(--white-color);
}

@media screen and (min-width: 1280px) {
  .header {
    top: 24px;
    width: calc(100% - 60px - 60px);
  }

  .logo-link-icon {
    width: 183.5px;
    height: 97.78px;
  }

  .hand-with-cup-img {
    width: 103px;
    height: 96px;
  }

  .warning-icon {
    position: absolute;
    top: 37.13px;
    left: 23.51px;
    display: block;
    width: 73.97px;
    height: 39.75px;
    fill: transparent;
    transition:
      fill var(--transition-duration-and-func),
      transform var(--transition-duration-and-func);
  }
}
</style>
