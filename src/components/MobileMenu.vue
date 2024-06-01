<script setup>
import { cardsValidator } from 'validator';
import GarnetColorIcon from 'icons/mobileMenu/garnet-color.svg?component';
import GlassesFromSilpoIcon from 'icons/mobileMenu/glasses-from-silpo.svg?component';
import IngeniousCollagesIcon from 'icons/mobileMenu/ingenious-collages.svg?component';
import InspiredByParajanovIcon from 'icons/mobileMenu/inspired-by-parajanov.svg?component';
import ParajanovsLifeIcon from 'icons/mobileMenu/parajanovs-life.svg?component';
import TastePreferencesIcon from 'icons/mobileMenu/taste-preferences.svg?component';
import ShadowsOfForgottenAncestorsIcon from 'icons/mobileMenu/shadows-of-forgotten-ancestors.svg?component';

defineProps({
  cards: cardsValidator,
  showMobileMenu: Boolean,
  onNavBtnClick: {
    type: Function,
    required: true,
  },
});
</script>

<template>
  <Transition name="mobile-menu">
    <div class="mobile-menu" v-show="showMobileMenu">
      <ul class="mobile-menu-list">
        <li class="mobile-menu-list-item" :key="index" v-for="({ title, number, id }, index) in cards">
          <button type="button" class="mobile-menu-btn" @click="onNavBtnClick" :data-card-id="id">
            <span class="mobile-menu-link-text">
              <span class="mobile-menu-link-text-number">{{ number }}.</span>
              <span class="mobile-menu-link-text-title">{{ title }}</span>
            </span>
            <ParajanovsLifeIcon v-show="number === 1" class="mobile-menu-link-icon" />
            <ShadowsOfForgottenAncestorsIcon v-show="number === 2" class="mobile-menu-link-icon" />
            <InspiredByParajanovIcon v-show="number === 3" class="mobile-menu-link-icon" />
            <TastePreferencesIcon v-show="number === 4" class="mobile-menu-link-icon" />
            <GlassesFromSilpoIcon v-show="number === 5" class="mobile-menu-link-icon" />
            <IngeniousCollagesIcon v-show="number === 6" class="mobile-menu-link-icon" />
            <GarnetColorIcon v-show="number === 7" class="mobile-menu-link-icon" />
          </button>
        </li>
      </ul>
    </div>
  </Transition>
</template>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: transform var(--transition-duration-and-func);
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  transform: translateX(-100%);
}

.mobile-menu {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #3d3f7f;
  padding: 130px 45.5px 80px;
  overflow-y: scroll;
}

.mobile-menu-list {
  display: flex;
  flex-direction: column;
  gap: 33px;
}

.mobile-menu-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  padding: 0;
  border: none;
  background-color: transparent;
}

.mobile-menu-link-text {
  display: flex;
  align-items: center;
  gap: 14px;
  color: var(--white-color);
  font-family: Shnobel;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.2;
  text-transform: uppercase;
}

.mobile-menu-link-icon {
  flex-shrink: 0;
}
</style>
