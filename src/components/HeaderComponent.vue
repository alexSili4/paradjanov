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
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 16px - 16px);
  transform: translateX(-50%);
}

.logo-link {
  flex-shrink: 0;
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
  width: 80px;
  height: 75px;
  transition: transform var(--transition-duration-and-func);
}

.hand-btn:is(:hover, :focus) .hand-with-cup-img {
  transform: rotate(-10.06deg);
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
    width: 125px;
    height: 116px;
  }

  .warning-icon {
    position: absolute;
    top: 38.7px;
    left: 27.7px;
    display: block;
    opacity: 0;
    transition:
      opacity var(--transition-duration-and-func),
      transform var(--transition-duration-and-func);
  }

  .hand-btn:is(:hover, :focus) .warning-icon {
    transform: translateY(80px);
    opacity: 1;
  }
}
</style>
