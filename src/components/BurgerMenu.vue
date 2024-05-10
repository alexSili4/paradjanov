<script setup>
import BurgerMenuItemMobile from 'icons/navBar/burger-menu-item-mobile.svg?component';
import BurgerMenuItemDesk from 'icons/navBar/burger-menu-item-desk.svg?component';
import { computed } from 'vue';

const props = defineProps({
  isOpenMenu: { type: Boolean, required: true },
  isDesk: { type: Boolean, required: true },
});

const getBurgerMenuClassNames = () => [
  'burger-menu-wrap',
  { 'hide-menu': !props.isOpenMenu },
];

const burgerMenuClassNames = computed(getBurgerMenuClassNames);
</script>

<template>
  <div :class="burgerMenuClassNames">
    <BurgerMenuItemDesk
      class="burger-menu-item-icon first-item"
      v-if="isDesk"
    />
    <BurgerMenuItemMobile class="burger-menu-item-icon first-item" v-else />
    <BurgerMenuItemDesk
      class="burger-menu-item-icon second-item"
      v-if="isDesk"
    />
    <BurgerMenuItemMobile class="burger-menu-item-icon second-item" v-else />
    <BurgerMenuItemDesk class="burger-menu-item-icon last-item" v-if="isDesk" />
    <BurgerMenuItemMobile class="burger-menu-item-icon last-item" v-else />
  </div>
</template>

<style scoped>
.burger-menu-wrap {
  position: absolute;
  top: 50%;
  left: 21.5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  width: 26px;
  transform: translateY(-50%);
  transition: transform var(--smooth-transition);
}

.burger-menu-wrap:not(.hide-menu) {
  transform: translateY(-50%) translateX(3px);
}

.burger-menu-wrap:not(.hide-menu) .first-item {
  transform: rotate(45deg);
}

.burger-menu-wrap:not(.hide-menu) .second-item {
  transform: scaleX(0);
  opacity: 0;
}

.burger-menu-wrap:not(.hide-menu) .last-item {
  transform: rotate(-45deg);
}

.burger-menu-item-icon {
  display: block;
  transform-origin: left center;
  transition:
    transform var(--smooth-transition),
    opacity var(--smooth-transition);
}

@media screen and (min-width: 1280px) {
  .burger-menu-wrap {
    left: 13px;
    gap: 3.8px;
    width: 23px;
  }

  .burger-menu-wrap:not(.hide-menu) {
    transform: translateY(-50%) translateX(2px);
  }
}
</style>
