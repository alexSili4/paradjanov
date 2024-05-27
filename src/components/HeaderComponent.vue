<script setup>
import LogoDesk from 'icons/header/logo-desk.svg?component';
import LogoMobile from 'icons/header/logo-mobile.svg?component';
import handWithCup from 'images/header/hand-with-cup.png';
import Warning from 'icons/header/warning.svg?component';
import { computed } from 'vue';
import CloseBtnIcon from 'icons/close-btn.svg?component';
import GlassesModalWin from 'components/GlassesModalWin.vue';

const props = defineProps({
  isDesk: {
    type: Boolean,
    required: true,
  },
  showGlassesModalWin: {
    type: Boolean,
    required: true,
  },
  toggleShowGlassesModalWin: {
    type: Function,
    required: true,
  },
});

const getShowCupBtnClassNames = () => ['show-cup-btn', { show: !props.showGlassesModalWin }];
const getHideCupBtnClassNames = () => ['hide-cup-btn', { show: props.showGlassesModalWin }];

const showCupBtnClassNames = computed(getShowCupBtnClassNames);
const hideCupBtnClassNames = computed(getHideCupBtnClassNames);
</script>

<template>
  <header class="header">
    <a href="/" class="logo-link">
      <LogoDesk class="logo-link-icon" v-if="isDesk" />
      <LogoMobile class="logo-link-icon" v-else />
    </a>
    <div class="show-cup-btn-wrap">
      <button type="button" :class="showCupBtnClassNames" @click="toggleShowGlassesModalWin">
        <img :src="handWithCup" alt="рука з чашкою" class="hand-with-cup-img" />
        <Warning class="warning-icon" v-show="isDesk" />
      </button>
      <button type="button" :class="hideCupBtnClassNames" @click="toggleShowGlassesModalWin"><CloseBtnIcon class="close-btn-icon" /></button>
    </div>
    <GlassesModalWin :isShow="showGlassesModalWin" :isDesk="isDesk" />
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  z-index: 1000000;
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

.show-cup-btn-wrap {
  position: relative;
}

.show-cup-btn {
  flex-shrink: 0;
  position: relative;
  align-self: flex-start;
  display: block;
  padding: 0;
  border: none;
  background-color: transparent;
  transform-origin: top right;
  transition: opacity var(--transition-duration-and-func);
}

.show-cup-btn:not(.show) {
  opacity: 0;
  pointer-events: none;
}

.hand-with-cup-img {
  position: relative;
  z-index: 1;
  width: 80px;
  height: 75px;
  transition: transform var(--transition-duration-and-func);
}

.hide-cup-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: none;
  padding: 0;
  border-radius: 50%;
  background-color: #939ccb;
  transform: translateX(-50%) translateY(-50%);
  transition: opacity var(--transition-duration-and-func);
}

.hide-cup-btn:not(.show) {
  opacity: 0;
  pointer-events: none;
}

.show-cup-btn:is(:hover, :focus) .hand-with-cup-img {
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

  .hide-cup-btn {
  }
  .close-btn-icon {
  }

  .show-cup-btn:is(:hover, :focus) .warning-icon {
    transform: translateY(80px);
    opacity: 1;
  }
}
</style>
