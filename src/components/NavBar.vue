<script setup>
import Arrow from 'icons/arrow.svg?component';
import CardsNumberList from 'components/CardsNumberList.vue';
import ZoomInMap from 'icons/navBar/zoom-in-map.svg?component';
import MenuDesk from 'icons/navBar/menu-desk.svg?component';
import MenuMobile from 'icons/navBar/menu-mobile.svg?component';
import BurgerMenu from 'components/BurgerMenu.vue';
import { ref, onBeforeMount, computed, watch } from 'vue';
import { cardsValidator } from 'validator';
import MobileMenu from 'components/MobileMenu.vue';
import { useRoute } from 'vue-router';
import { getPrevAndNextCardId } from 'utils';

const route = useRoute();

const nextCardIdRef = ref(null);
const prevCardIdRef = ref(null);
const props = defineProps({
  cards: cardsValidator,
  onZoomBtnClick: {
    type: Function,
    required: true,
  },
  onNavBtnClick: {
    type: Function,
    required: true,
  },
  isOpenMenu: {
    type: Boolean,
    required: true,
  },
  showArticle: {
    type: Boolean,
    required: true,
  },
  activeCardId: {
    type: String,
    required: true,
  },
  toggleShowAllMap: {
    type: Function,
    required: true,
  },
  isDesk: {
    type: Boolean,
    required: true,
  },
});

onBeforeMount(() => {
  const defaultCardId = props.cards[0].id;
  const query = route.query;
  const cardId = query.cardId || defaultCardId;
  const { prevCardId, nextCardId } = getPrevAndNextCardId({ cardId, cards: props.cards });
  prevCardIdRef.value = prevCardId;
  nextCardIdRef.value = nextCardId;
});

const onActiveCardIdChangeDependencies = () => route.query;
const onActiveCardIdChange = ({ cardId }) => {
  const { prevCardId, nextCardId } = getPrevAndNextCardId({ cardId, cards: props.cards });
  prevCardIdRef.value = prevCardId;
  nextCardIdRef.value = nextCardId;
};
watch(onActiveCardIdChangeDependencies, onActiveCardIdChange);

const getMenuBtnClassNames = () => ['menu-btn', { 'menu-open': props.isOpenMenu }];

const getMenuBtnWrapClassNames = () => ['menu-btn-wrap', { 'menu-open': props.isOpenMenu }];

const getNavBtnClassNames = () => ['nav-btn', { 'menu-open': props.isOpenMenu, active: props.showArticle }];

const getShowMobileMenu = () => props.isOpenMenu && !props.isDesk;

const menuBtnClassNames = computed(getMenuBtnClassNames);
const menuBtnWrapClassNames = computed(getMenuBtnWrapClassNames);
const navBtnClassNames = computed(getNavBtnClassNames);
const showMobileMenu = computed(getShowMobileMenu);
</script>

<template>
  <div class="nav-bar">
    <button type="button" class="zoom-btn" @click="toggleShowAllMap" v-show="isDesk">
      <ZoomInMap class="zoom-btn-icon" />
    </button>
    <button type="button" :class="navBtnClassNames" v-show="!isDesk" :data-card-id="prevCardIdRef" @click="onNavBtnClick">
      <Arrow class="nav-btn-icon prev-btn-icon" />
    </button>
    <div :class="menuBtnWrapClassNames">
      <button type="button" :class="menuBtnClassNames" @click="onZoomBtnClick">
        <MenuDesk class="menu-btn-icon" v-if="isDesk" />
        <MenuMobile class="menu-btn-icon" v-else />
        <BurgerMenu :isOpenMenu="isOpenMenu" :isDesk="isDesk" />
      </button>
      <CardsNumberList :cards="cards" :isDesk="isDesk" :onNavBtnClick="onNavBtnClick" :activeCardId="activeCardId" />
    </div>
    <button type="button" :class="navBtnClassNames" v-show="!isDesk" :data-card-id="nextCardIdRef" @click="onNavBtnClick">
      <Arrow class="nav-btn-icon" />
    </button>
    <div class="zoom-btn fake-btn" v-show="isDesk"></div>
  </div>
  <MobileMenu :cards="cards" :showMobileMenu="showMobileMenu" :onNavBtnClick="onNavBtnClick" />
</template>

<style scoped>
.nav-bar {
  position: fixed;
  z-index: 100;
  left: 50%;
  bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 16px - 16px);
  transform: translateX(-50%);
}

.nav-btn {
  flex-shrink: 0;
  padding: 15px;
  border: none;
  border-radius: 100px;
  backdrop-filter: blur(20px);
  background-color: rgba(255, 255, 255, 0.34);
  transition:
    opacity var(--transition-duration-and-func),
    visibility var(--transition-duration-and-func),
    background-color var(--transition-duration-and-func);
}

.nav-btn.active {
  background-color: #939ccb;
}

.nav-btn.menu-open {
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
}

.nav-btn-icon {
  display: block;
}

.prev-btn-icon {
  transform: rotate(180deg);
}

.menu-btn-wrap {
  flex-shrink: 0;
}

.menu-btn {
  position: relative;

  display: block;
  border: none;
  padding: 0;
  background-color: transparent;
}

.menu-btn-icon {
  display: block;
  width: 76px;
  height: 57px;
}

.menu-btn.menu-open .burger-menu-icon {
  transform: translateX(100%) translateY(-100%);
  opacity: 0;
}

.menu-btn.menu-open .burger-menu-close-icon {
  transform: translateX(0) translateY(0);
  opacity: 1;
}

@media screen and (max-width: 1279px) {
  .nav-bar {
    position: fixed;
    z-index: 10000000;
  }
}

@media screen and (min-width: 1280px) {
  .nav-bar {
    left: 60px;
    bottom: 28px;
    align-items: center;
    justify-content: space-between;
    width: calc(100% - 60px - 60px);
    transform: translateX(0);
  }

  .zoom-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    padding: 0;
    border: none;
    border-radius: 50%;
    backdrop-filter: blur(20px);
    background-color: rgba(255, 255, 255, 0.34);
    transition: background-color var(--transition-duration-and-func);
  }

  .zoom-btn.fake-btn {
    background-color: transparent;
    backdrop-filter: inherit;
    pointer-events: none;
  }

  .zoom-btn:is(:hover, :focus) {
    background-color: #ef7c00;
  }

  .zoom-btn-icon {
    display: block;
    width: 24px;
    height: 24px;
    fill: var(--white-color);
  }

  .menu-btn-wrap {
    display: flex;
    align-items: center;
    gap: 4px;
    max-width: 100%;
    border-radius: 32px;
    backdrop-filter: blur(20px);
    background-color: rgba(255, 255, 255, 0.34);
    padding: 7px 24px 7px 8px;
    transition: max-width var(--smooth-transition);
    overflow: hidden;
  }

  .menu-btn-wrap:not(.menu-open) {
    max-width: 81px;
  }

  .menu-btn-icon {
    width: 65px;
    height: 50px;
  }
}
</style>
